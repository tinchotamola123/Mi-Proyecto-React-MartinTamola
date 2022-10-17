import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);   
    
    return ( 
        <>
        <Link to='/cart'>
            <AiOutlineShoppingCart />
        </Link>
        {totalQuantity > 0 && (
            <Badge pill bg="dark">{totalQuantity}</Badge> 
        )}   
        </>
    );
}

export default CartWidget;