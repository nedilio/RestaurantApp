import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom";

const CartWidget = ({onCart}) => {
  let items = onCart.map(item => item.count).reduce((sum,value) => sum+value, 0)
  console.log(items);
  return (
    <Link to="/cart">
      <span>
        <ShoppingCart />
        {items}
      </span>
    </Link>
  )
}

export default CartWidget