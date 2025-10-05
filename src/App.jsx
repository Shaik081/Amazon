import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
