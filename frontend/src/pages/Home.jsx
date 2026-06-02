import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page hero">
      <h1>AI Crop Disease Diagnosis & Product Recommendation</h1>
      <p>
        Upload crop images, receive AI diagnosis, treatment guidance, and
        recommended agricultural products.
      </p>

      <div className="actions">
        <Link className="button" to="/diagnose">
          Start Diagnosis
        </Link>
        <Link className="button secondary" to="/products">
          Browse Products
        </Link>
      </div>
    </main>
  );
}

export default Home;
