import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <main className="page">Loading product...</main>;
  }

  if (product.error) {
    return <main className="page">Product not found.</main>;
  }

  function handleAddToCart() {
    addToCart(product);
    alert("Product added to cart!");
  }

  return (
    <main className="page">
      <section className="card">
        <h1>{product.name}</h1>
        <p>{product.type}</p>
        <h3>{product.price} SAR</h3>

        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </section>
    </main>
  );
}

export default ProductDetails;
