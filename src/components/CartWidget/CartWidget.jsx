import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let items = cart
    .map((item) => item.count)
    .reduce((sum, value) => sum + value, 0);
  return (
    <>
      {cart.length > 0 && (
        <Link to="/cart" className="cart-widget-link">
          <div className="btn-floating btn-large waves-effect waves-light cart-widget">
            <ShoppingCart sx={{ fontSize: 40 }} className="cart-widget-icon" />
            <span className="cart-widget-number">{items}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
