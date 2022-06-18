const Item = ({ producto, onCart, setOnCart }) => {
  const add = () => {
    const id = producto.id;
    const isOnCart = onCart.find((item) => item.id === id);
    console.log(isOnCart);
    if (!isOnCart) {
      setOnCart([...onCart, { id: producto.id, count: 1 }]);
    } else {
      setOnCart(
        onCart.map((item) => {
          console.log(item.id, id);
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        })
      );
    }
  };

  const { price, description, image, disponible } = producto.acf;
  const name = producto.title.rendered;

  return (
    <div className="card col s4">
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
          onClick={add}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Item;
