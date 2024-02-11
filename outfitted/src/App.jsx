import Home from "./pages/Home";
import ProductlistPage from "./pages/ProductlistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
