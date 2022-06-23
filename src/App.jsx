import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import { CartContextProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://mdsmx.xyz/restaurantapp/wp-json/wp/v2/posts?acf_format=standard")
      .then((res) => res.json())
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));

    fetch(
      "http://mdsmx.xyz/restaurantapp/wp-json/wp/v2/categories?orderby=description&?order=desc&exclude=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setCategories(
          res.map((item) => {
            let { id, name, slug } = item;
            return {
              id,
              name,
              slug,
            };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
      <CartContextProvider>
    <BrowserRouter>
      <header className="navbar-fixed teal darken-1">
        <NavBar categorias={categorias} />
      </header>
        <Routes>
          <Route
            path="/"
            element={
              <Productos
                productos={productos}
                categorias={categorias}
              />
            }
          />
          <Route
            path="/categoria/:cat"
            element={
              <Productos
                productos={productos}
                categorias={categorias}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart productos={productos}/>}
          />
        </Routes>
    </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
