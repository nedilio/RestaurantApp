import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(
    () => {
      fetch("http://eitawa.local/wp-json/wp/v2/posts?acf_format=standard")
      .then(res => res.json())
      .then(res => setProductos(res));
      
    },[]
  );
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home productos={productos}></Home>}></Route>
          <Route path="/cart" element={<Cart productos={productos}></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
