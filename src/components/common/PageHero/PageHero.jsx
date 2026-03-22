function PageHero({
  eyebrow,
  title,
  subtitle,
  intro,
  centered = false,
  className = "",
}) {
  return (

    <section className={`section page-hero-block ${className}`.trim()}>

      <div className="container">

        <div className={centered ? "page-hero page-hero--centered" : "page-hero"}>

          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h1>{title}</h1>}
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
          {intro && <p className="page-intro">{intro}</p>}
          
        </div>

      </div>

    </section>

  );

}

export default PageHero;