import Item from "../ItemList/Item";
import { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount , setShowItemCount] = useState(true);

    const handleAdd = (value) =>{
        setCount(value);
        setShowItemCount(false);
        addItem (product , value);
    };

    return (
        <>
        <Item product={product} />
        {
            showItemCount && (
                <ItemCount initial={1} stock={10} onAdd={handleAdd}/>
            )
        }
        {
            !showItemCount && (
                <Link to='/cart'>
                    <Button variant="success">Ir al carrito</Button> 
                </Link>
            )
        }
        </>
    );
}

export default ItemDetail;