import { CartSection } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import ProductlistPage from "./pages/ProductlistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductlistPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        {/* <Route path="/product/id" element={<ProductDetails />} /> */}
        <Route path="/cart/id" element={<CartSection />} />
        <Route path="/checkout/id" element={<Checkout />} />
        <Route path="/upload/product" element={<ProductForm />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;


// For the smallest possible production build, we recommend minifying your CSS with a tool like cssnano, and compressing your CSS with Brotli. 
// If you're using a framework, check the documentation as this is often handled for you in production automatically and you don't even need to configure it.
