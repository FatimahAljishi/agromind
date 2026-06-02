import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import UploadDiagnosis from "./pages/UploadDiagnosis";
import DiagnosisResult from "./pages/DiagnosisResult";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>AgroMind</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/diagnose">Diagnose</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnose" element={<UploadDiagnosis />} />
        <Route path="/result" element={<DiagnosisResult />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
