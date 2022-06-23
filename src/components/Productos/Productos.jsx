import Item from "../Item/Item";
import CartWidget from "../CartWidget/CartWidget";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Productos = (props) => {
  let categoria = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categories, setCategories] = useState([props.categorias]);

  useEffect(() => {
    const productos = props.productos;
    if (!categoria.cat) {
      setCategories(props.categorias);
      let orderedProducts = [];
      props.categorias.map((cat) => {
        productos.filter((producto) => {
          if (producto.categories[0] === cat.id) {
            orderedProducts.push(producto);
            return true;
          }
        });
      });
      setProductosFiltrados(orderedProducts);
    } else {
      setCategories([
        props.categorias.find((cat) => cat.id === parseInt(categoria.cat)),
      ]);

      setProductosFiltrados(
        productos.filter(
          (item) => item.categories[0] === parseInt(categoria.cat)
        )
      );
    }
  }, [categoria]);

  return (
    <div className="app-container">
      <div className="container">
        <CartWidget />
        <div className="row">
          {productosFiltrados.length === 0 ? (
            <p>loading...</p>
          ) : (
            categories.map((cat) => (
              <div key={cat.id} className="category">
                <h2 className="teal-text cat-title">{cat.name}</h2>

                {productosFiltrados.map((producto) => {
                  if (producto.categories[0] === cat.id) {
                    return (
                      <Item
                        key={producto.id}
                        producto={producto}
                      />
                    );
                  }
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
