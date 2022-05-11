import "./App.css";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="*" element={<h1>No page exists</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
