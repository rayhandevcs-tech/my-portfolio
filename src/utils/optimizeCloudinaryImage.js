export function optimizeCloudinaryImage(url, width = 800) {
  if (!url || !url.includes("/upload/")) return url;

  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
}

// // <img
//   src={optimizeCloudinaryImage(image, 1000)}
//   alt={title}
// />