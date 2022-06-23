import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";

const Cart = (props) => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      {props.productos.length > 0 && (
        <div className="app-container">
          <div className="container">
            <div className="row"></div>
          {cart.length === 0 && <p>No hay productos en el carrito</p> }
            <ul className="collection">
              {cart.map((item) => {
                let producto = props.productos.find(
                  (producto) => producto.id === item.id
                );

                return (
                  <li className="collection-item avatar" key={item.id}>
                    <img src={producto.acf.image} alt="" className="circle" />
                    <span className="title">{producto.title.rendered}</span>
                    <p>
                      cantidad: {item.count} <br />
                      precio unitario: {producto.acf.price} <br />
                      precio total: {item.count * producto.acf.price}
                    </p>
                    <a
                      href="#"
                      className="secondary-content"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="material-icons">delete_forever</i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
