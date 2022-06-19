import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = ({ onCart }) => {
  let items = onCart
    .map((item) => item.count)
    .reduce((sum, value) => sum + value, 0);
  return (
    <Link to="/cart" className="cart-widget-link">
      <div className="btn-floating btn-large waves-effect waves-light cart-widget">
        <ShoppingCart sx={{ fontSize: 40 }} className="cart-widget-icon" />
        <span className="cart-widget-number">{items}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
