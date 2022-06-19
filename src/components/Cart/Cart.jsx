import { PowerInputSharp } from "@mui/icons-material";

const Cart = (props) => {
  console.log(props);
  return (
    <div className="app-container">
      <div className="container">
        <div className="row"></div>
        <ul className="collection">
          {props.onCart.map((item) => {
            let producto = props.productos.find(
              (producto) => producto.id === item.id
            );

            return (
              <li className="collection-item avatar" key={item.id}>
                <img src={producto.acf.image} alt="" className="circle" />
                <span className="title">{producto.title.rendered}</span>
                <p>
                  cantidad: {item.count} <br />
                  precio total: {item.count * producto.acf.price}
                </p>
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
