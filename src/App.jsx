import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { createContext, useState } from "react";
import ItemSearch from "./components/ItemSearch";

export const myContext = createContext()

function App() {

  
  const [items, setItems] = useState([]);
  const [detail,setDetails] = useState({})
  const [isShare,setIsShare] = useState(null)
    const [lapShare,setLapShare] = useState(null)
    const [showShare,setShowShare] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <myContext.Provider value={{items,setItems,detail,setDetails,isShare,setIsShare,showShare,setShowShare,lapShare,setLapShare}}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
        </Routes>  
        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
