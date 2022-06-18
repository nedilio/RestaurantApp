import React, { createContext } from 'react'
import { useState } from 'react'
import { platos } from '../../data/platos'
import Item from '../Item/Item'
import CartWidget from "../CartWidget/CartWidget";

const Home = ({productos}) => {
const [onCart, setOnCart] = useState([]);
// const toCart = createContext(onCart);

  return (
    <div className='container'>
        Este es el Home
    <CartWidget onCart={onCart}/>

        <div className="row">

        {productos.map(
          (producto) => <Item className="col s4"
          producto={producto} 
          key={producto.id} 
          setOnCart={setOnCart} 
          onCart={onCart}
          />)}
        </div>
    </div>
  )
}

export default Home