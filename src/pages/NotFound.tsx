import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "140px 0", textAlign: "center" }}>
      <p className="eyebrow">404</p>
      <h1 className="serif" style={{ fontSize: 40, marginTop: 12 }}>
        Nothing to see here.
      </h1>
      <p style={{ marginTop: 20 }}>
        <Link to="/" className="mono">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
