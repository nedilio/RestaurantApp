import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./Cart.css";

const Cart = (props) => {
  const { cart, removeItem } = useContext(CartContext);
  let total = 0;
  cart.map((item) => {
    let producto = props.productos.find((producto) => producto.id === item.id);
    total = total + item.count * producto.acf.price;
  });

  console.log(total);

  return (
    <>
      {props.productos.length > 0 && (
        <div className="app-container">
          <div className="container">
            {cart.length === 0 && <p>No hay productos en el carrito</p>}
            <ul className="collection">
              {cart.map((item) => {
                let producto = props.productos.find(
                  (producto) => producto.id === item.id
                );

                return (
                  <li className="collection-item avatar" key={item.id}>
                    <img src={producto.acf.image} alt="" className="circle" />
                    <span className="title">{producto.title.rendered}</span>
                    <ItemCount count={item.count} id={item.id} />
                    <p>
                      precio unitario: {producto.acf.price} <br />
                      precio total: {item.count * producto.acf.price}
                    </p>
                    <button
                      className="btn waves-effect waves-light secondary-content"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="material-icons">delete_forever</i>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="total">
            { total> 0 && <p className="teal-text darken-3">total: {total}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
