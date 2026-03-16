export function extractHeadings(markdownText) {
  if (!markdownText) return [];

  const lines = markdownText.split("\n");

  return lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line, index) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^###?\s/, "").trim();
      const id = `${text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")}-${index}`;

      return {
        id,
        text,
        level,
      };
    });
}