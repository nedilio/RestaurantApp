import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";

function CartWidget(props) {
  return (
    <a href="#" className="cart-widget">
      <ShoppingCartIcon fontSize="large" />
      esto es un cambio en un archivo jsx
      <span>{props.items}</span>
    </a>
  );
}
export default CartWidget;
