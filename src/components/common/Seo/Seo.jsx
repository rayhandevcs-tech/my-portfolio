import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../../../data/site";

function Seo({
  title = "RayhanDev",
  description = "Personal portfolio, blog, projects, research notes, and full-stack development journey.",
  keywords = "portfolio, blog, react, full stack, developer",
  image = "/images/og-default.jpg",
  url = SITE_URL,
  type = "website",
}) {
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={url} />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  );
}

export default Seo;