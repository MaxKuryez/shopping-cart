import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./components/pages/productsPage";
import { DocumentPage } from "./components/pages/documentPage";
import { CartPage } from "components/pages/cartPage";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/documentation" element={<DocumentPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
