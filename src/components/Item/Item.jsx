import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const { price, description, image, disponible } = producto.acf;
  const name = producto.title.rendered;
  const id = producto.id;

  return (
    <div className="card col">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>$ {price}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <p>{description}</p>
        <p>$ {price}</p>
        <button
          className="btn waves-effect waves-light"
          disabled={!disponible[0]}
          onClick={() => addToCart(id, producto)}
        >
          <i className="material-icons">add_shopping_cart</i>
        </button>
      </div>
    </div>
  );
};

export default Item;
