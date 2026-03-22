import "./SectionHeader.css";

function SectionHeader({ eyebrow, title, intro, centered = false }) {
  return (
    <div
      className={
        centered ? "section-header section-header--centered" : "section-header"
      }
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {intro && <p className="page-intro">{intro}</p>}
    </div>
  );
}

export default SectionHeader;