import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);   
    
    return ( 
        <>
        <Link to='/cart'>
            <AiOutlineShoppingCart className='svgnavbar' />
        </Link>
        {totalQuantity > 0 && (
            <span pill className='svgcantidad' bg="dark">{totalQuantity}</span> 
        )}   
        </>
    );
}

export default CartWidget;