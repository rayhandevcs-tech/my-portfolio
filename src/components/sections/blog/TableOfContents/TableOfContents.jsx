import { useEffect, useState } from "react";
import "./TableOfContents.css";

function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <aside className="table-of-contents" aria-label="Table of contents">
      <h3 className="table-of-contents__title">On this page</h3>

      <ul className="table-of-contents__list">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`table-of-contents__item level-${heading.level} ${
              activeId === heading.id ? "active" : ""
            }`}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TableOfContents;