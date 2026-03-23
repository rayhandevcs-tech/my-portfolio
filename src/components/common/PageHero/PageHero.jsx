import "./PageHero.css";

function PageHero({
  eyebrow,
  title,
  subtitle,
  intro,
  centered = false,
  className = "",
  compact = false,
}) {
  return (
    <section
      className={`section page-hero-block ${compact ? "page-hero-block--compact" : ""} ${className}`.trim()}
    >
      <div className={compact ? "page-hero-shell" : "container"}>
        <div className={centered ? "page-hero page-hero--centered" : "page-hero"}>
          {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
          {title && <h1 className="page-hero__title">{title}</h1>}
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
          {intro && <p className="page-hero__intro">{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;