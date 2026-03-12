import { useEffect, useState } from "react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector(".blog-details");

      if (!article) {
        setProgress(0);
        return;
      }

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const totalScrollable = articleHeight - windowHeight;
      const current = scrollTop - articleTop;

      if (totalScrollable <= 0) {
        setProgress(100);
        return;
      }

      const value = Math.min(
        100,
        Math.max(0, (current / totalScrollable) * 100)
      );

      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div
        className="reading-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ReadingProgress;