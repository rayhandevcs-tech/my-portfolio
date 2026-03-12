import { Post } from "../models/Post.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

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

export async function getPostBySlug(req, res) {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({ slug });

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

export async function getPostById(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

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
    } = req.body;

    if (!title || !slug || !excerpt || !content || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, excerpt, content, and category are required",
      });
    }

    const existingPost = await Post.findOne({ slug });

    if (existingPost) {
      return res.status(400).json({
        success: false,
        message: "A post with this slug already exists",
      });
    }

    const newPost = await Post.create({
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || "",
      category,
      tags: Array.isArray(tags) ? tags : [],
      featured: Boolean(featured),
      author: author || "Md Rayhan",
      publishedAt: publishedAt || new Date().toISOString().slice(0, 10),
      readingTime: readingTime || "",
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
    } = req.body;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (slug && slug !== post.slug) {
      const existingPost = await Post.findOne({ slug });

      if (existingPost) {
        return res.status(400).json({
          success: false,
          message: "A post with this slug already exists",
        });
      }
    }

    post.title = title ?? post.title;
    post.slug = slug ?? post.slug;
    post.excerpt = excerpt ?? post.excerpt;
    post.content = content ?? post.content;
    post.coverImage = coverImage ?? post.coverImage;
    post.category = category ?? post.category;
    post.tags = Array.isArray(tags) ? tags : post.tags;
    post.featured = typeof featured === "boolean" ? featured : post.featured;
    post.author = author ?? post.author;
    post.publishedAt = publishedAt ?? post.publishedAt;
    post.readingTime = readingTime ?? post.readingTime;

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