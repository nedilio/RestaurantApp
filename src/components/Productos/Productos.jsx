import Item from "../Item/Item";
import CartWidget from "../CartWidget/CartWidget";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Productos = (props) => {
  let categoria = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const productos = props.productos;
    if (!categoria.cat) {
      setProductosFiltrados(productos);
    } else {
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
        <CartWidget onCart={props.onCart} />
        <div className="row">
          {productosFiltrados.map((producto) => (
            <Item
              producto={producto}
              key={producto.id}
              setOnCart={props.setOnCart}
              onCart={props.onCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
