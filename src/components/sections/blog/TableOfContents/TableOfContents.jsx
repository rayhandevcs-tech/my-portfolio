import "./TableOfContents.css";

function TableOfContents({ headings }) {
  if (!headings || headings.length === 0) return null;

  return (
    <aside className="table-of-contents">
      <h3 className="table-of-contents__title">On this page</h3>

      <ul className="table-of-contents__list">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`table-of-contents__item level-${heading.level}`}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TableOfContents;