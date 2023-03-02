import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./components/pages/productsPage";
import { DocumentPage } from "./components/pages/documentPage";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/documentation" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
