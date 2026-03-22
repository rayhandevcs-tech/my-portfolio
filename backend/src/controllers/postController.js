import { Post } from "../models/Post.js";

const POST_CARD_FIELDS =
  "_id title slug excerpt coverImage category tags featured author publishedAt readingTime views status createdAt updatedAt";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({ status: "published" })
      .select(POST_CARD_FIELDS)
      .sort({ featured: -1, publishedAt: -1, createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
}

export async function getAdminPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch admin posts",
      error: error.message,
    });
  }
}

export async function getPostBySlug(req, res) {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({ slug, status: "published" }).lean();

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch post",
      error: error.message,
    });
  }
}

export async function getRelatedPostsBySlug(req, res) {
  try {
    const { slug } = req.params;
    const limit = Math.max(1, Number(req.query.limit) || 3);

    const currentPost = await Post.findOne({
      slug,
      status: "published",
    })
      .select("_id slug category tags")
      .lean();

    if (!currentPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const currentTags = Array.isArray(currentPost.tags) ? currentPost.tags : [];

    let relatedPosts = await Post.find({
      _id: { $ne: currentPost._id },
      status: "published",
      category: currentPost.category,
    })
      .select(POST_CARD_FIELDS)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    if (relatedPosts.length < limit && currentTags.length > 0) {
      const existingIds = relatedPosts.map((post) => post._id);

      const tagMatches = await Post.find({
        _id: { $nin: [currentPost._id, ...existingIds] },
        status: "published",
        tags: { $in: currentTags },
      })
        .select(POST_CARD_FIELDS)
        .sort({ publishedAt: -1, createdAt: -1 })
        .limit(limit - relatedPosts.length)
        .lean();

      relatedPosts = [...relatedPosts, ...tagMatches];
    }

    if (relatedPosts.length < limit) {
      const existingIds = relatedPosts.map((post) => post._id);

      const fallbackPosts = await Post.find({
        _id: { $nin: [currentPost._id, ...existingIds] },
        status: "published",
      })
        .select(POST_CARD_FIELDS)
        .sort({ featured: -1, publishedAt: -1, createdAt: -1 })
        .limit(limit - relatedPosts.length)
        .lean();

      relatedPosts = [...relatedPosts, ...fallbackPosts];
    }

    return res.status(200).json({
      success: true,
      data: relatedPosts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch related posts",
      error: error.message,
    });
  }
}

export async function getPostById(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id).lean();

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch post",
      error: error.message,
    });
  }
}

export async function createPost(req, res) {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      tags,
      featured,
      author,
      publishedAt,
      readingTime,
      status,
    } = req.body;

    if (!title || !slug || !excerpt || !content || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, excerpt, content, and category are required",
      });
    }

    const normalizedSlug = String(slug).trim().toLowerCase();

    const existingPost = await Post.findOne({ slug: normalizedSlug });

    if (existingPost) {
      return res.status(400).json({
        success: false,
        message: "A post with this slug already exists",
      });
    }

    const newPost = await Post.create({
      title: title.trim(),
      slug: normalizedSlug,
      excerpt: excerpt.trim(),
      content,
      coverImage: coverImage || "",
      category: category.trim(),
      tags: Array.isArray(tags) ? tags : [],
      featured: Boolean(featured),
      author: author || "Md Rayhan",
      publishedAt: publishedAt || new Date().toISOString().slice(0, 10),
      readingTime: readingTime || "",
      status: status === "published" ? "published" : "draft",
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: error.message,
    });
  }
}

export async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      tags,
      featured,
      author,
      publishedAt,
      readingTime,
      status,
    } = req.body;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const normalizedSlug =
      typeof slug === "string" ? slug.trim().toLowerCase() : post.slug;

    if (normalizedSlug && normalizedSlug !== post.slug) {
      const existingPost = await Post.findOne({ slug: normalizedSlug });

      if (existingPost) {
        return res.status(400).json({
          success: false,
          message: "A post with this slug already exists",
        });
      }
    }

    post.title = title ?? post.title;
    post.slug = normalizedSlug ?? post.slug;
    post.excerpt = excerpt ?? post.excerpt;
    post.content = content ?? post.content;
    post.coverImage = coverImage ?? post.coverImage;
    post.category = category ?? post.category;
    post.tags = Array.isArray(tags) ? tags : post.tags;
    post.featured = typeof featured === "boolean" ? featured : post.featured;
    post.author = author ?? post.author;
    post.publishedAt = publishedAt ?? post.publishedAt;
    post.readingTime = readingTime ?? post.readingTime;
    post.status =
      status === "published"
        ? "published"
        : status === "draft"
        ? "draft"
        : post.status;

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update post",
      error: error.message,
    });
  }
}

export async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete post",
      error: error.message,
    });
  }
}

export async function toggleFeaturedPost(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    post.featured = !post.featured;
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Featured status updated",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to toggle featured status",
      error: error.message,
    });
  }
}

export async function incrementPostViews(req, res) {
  try {
    const { slug } = req.params;

    const post = await Post.findOneAndUpdate(
      { slug, status: "published" },
      { $inc: { views: 1 } },
      { new: true }
    ).lean();

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update views",
      error: error.message,
    });
  }
}

export async function getPostStats(req, res) {
  try {
    const totalPosts = await Post.countDocuments();
    const featuredPosts = await Post.countDocuments({ featured: true });

    const viewsAggregation = await Post.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
        },
      },
    ]);

    const totalViews = viewsAggregation[0]?.totalViews || 0;

    const mostViewedPost = await Post.findOne()
      .sort({ views: -1 })
      .select("title slug views")
      .lean();

    const topViewedPosts = await Post.find()
      .sort({ views: -1 })
      .limit(5)
      .select("title slug views")
      .lean();

    return res.status(200).json({
      success: true,
      data: {
        totalPosts,
        featuredPosts,
        totalViews,
        mostViewedPost: mostViewedPost
          ? {
              id: mostViewedPost._id,
              title: mostViewedPost.title,
              slug: mostViewedPost.slug,
              views: mostViewedPost.views || 0,
            }
          : null,
        topViewedPosts: topViewedPosts.map((post) => ({
          id: post._id,
          title: post.title,
          slug: post.slug,
          views: post.views || 0,
        })),
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch post stats",
      error: error.message,
    });
  }
}