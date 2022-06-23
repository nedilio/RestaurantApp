import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const otroValor = "valor desde el context";

  function addToCart(id, producto) {
    const isOnCart = cart.find((item) => item.id === id);
    if (!isOnCart) {
      setCart([...cart, { id: producto.id, count: 1 }]);
    } else {
      setCart(
        cart.map((item) => {
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
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id != id));
  }

  return (
    <CartContext.Provider value={{ cart, otroValor, addToCart, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
