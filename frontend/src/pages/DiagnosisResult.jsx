import { Link, useLocation } from "react-router-dom";

function DiagnosisResult() {
  const location = useLocation();

  const result = location.state;

  if (!result) {
    return (
      <main className="page">
        <h1>No diagnosis data found.</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Diagnosis Result</h1>

      <section className="card">
        <h2>{result.crop}</h2>

        <h3>{result.condition}</h3>

        <h4>Disease Explanation</h4>

        <p>{result.explanation}</p>

        <h4>Treatment Guide</h4>

        <p>{result.treatment}</p>
      </section>

      <h2>Recommended Products</h2>

      <div className="grid">
        {result.recommended_products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>

            <p>{product.type}</p>

            <Link className="button" to={`/products/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DiagnosisResult;
