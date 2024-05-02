
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Features from "./pages/Features";
import Marketplace from "./pages/Marketplace";
import Products from "./pages/Products";
import NoPage from "./pages/NoPage";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Company" element={<Company />} />
          <Route path="Features" element={<Features />} />
          <Route path="Marketplace" element={<Marketplace />} />
          <Route path="Products" element={<Products />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
