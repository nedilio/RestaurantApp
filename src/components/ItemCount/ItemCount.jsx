import { useContext } from 'react'
import CartContext from '../../context/CartContext';
import './ItemCount.css';


const ItemCount = (props) => {
  const {addOne, removeOne} = useContext(CartContext);
  return (
    <div className='item-count'>
        <button className="btn waves-effect waves-light btn-remove" onClick={()=> removeOne(props.id)} disabled={props.count===1}><i className="material-icons">remove</i></button>
        <span>{props.count}</span>
        <button className="btn waves-effect waves-light btn-add" onClick={()=> addOne(props.id)} ><i className="material-icons">add</i></button>
    </div>
  )
}

export default ItemCount