import Item from "../ItemList/Item";
import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {

    const [count, setCount] = useState(0);
    const [showItemCount , setShowItemCount] = useState(true);

    const handleAdd = (value) =>{
        setCount(value);
        setShowItemCount(false);
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