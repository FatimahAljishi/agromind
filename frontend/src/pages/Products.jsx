import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://127.0.0.1:8000/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <main className="page">
      <h1>Products</h1>
      <p>Browse agricultural products available on AgroMind.</p>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.type}</p>
            <strong>{product.price} SAR</strong>
            <br />

            <Link className="button" to={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
