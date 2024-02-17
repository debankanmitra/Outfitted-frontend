import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductlistPage from "./pages/ProductlistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductlistPage />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/product/id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
