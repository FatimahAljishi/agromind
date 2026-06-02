import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid">
            {cartItems.map((item) => (
              <div className="card" key={item.id}>
                <h3>{item.name}</h3>

                <p>{item.type}</p>

                <p>{item.price} SAR</p>

                <button
                  className="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <section className="card">
            <h2>Total: {total} SAR</h2>

            <button className="button">Confirm Order</button>
          </section>
        </>
      )}
    </main>
  );
}

export default Cart;
