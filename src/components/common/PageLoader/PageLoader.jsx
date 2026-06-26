import "./PageLoader.css";

function SkeletonCard() {
  return (
    <div className="page-loader__card" aria-hidden="true">
      <div className="sk sk--card-image" />
      <div className="page-loader__card-body">
        <div className="sk sk--card-meta" />
        <div className="sk sk--card-title" />
        <div className="sk sk--card-text" />
        <div className="sk sk--card-text sk--card-text-short" />
      </div>
    </div>
  );
}

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader__hero">
        <div className="page-loader__hero-inner">
          <div className="sk sk--eyebrow" />
          <div className="sk sk--title" />
          <div className="sk sk--subtitle" />
          <div className="sk sk--subtitle sk--subtitle-short" />
        </div>
      </div>

      <div className="page-loader__body">
        <div className="page-loader__body-inner">
          <div className="page-loader__grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
