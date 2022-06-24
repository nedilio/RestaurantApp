import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const onCart = JSON.parse(localStorage.getItem("cart"));
    setCart(onCart);
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id != id));
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  function addOne(id) {
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
  function removeOne(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, addOne, removeOne }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
