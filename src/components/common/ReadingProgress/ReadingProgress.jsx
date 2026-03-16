import { useEffect, useState } from "react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateReadingProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    }

    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress);

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "4px",
        background: "#6c4ef6",
        zIndex: 9999,
        transition: "width 0.1s linear",
      }}
    />
  );
}

export default ReadingProgress;