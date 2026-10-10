export default function FeatureItem({ name,featurName, id }) {
  return (
    <li className="nav-item me-3" role="presentation">
      <button
        className={`nav-link rounded-pill mb-2 ${id === 0 ? "active" : ""}`}
        id={`pills-${featurName}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#pills-${featurName}`}
        type="button"
        role="tab"
        aria-controls={`pills-${featurName}`}
        aria-selected={id === 0}
      >
        {name}
      </button>
    </li>
  );
}