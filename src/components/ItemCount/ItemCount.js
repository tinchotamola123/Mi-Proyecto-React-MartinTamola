import React, {useEffect, useState, } from 'react'
import './ItemCount.css';


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

    return (
        <div className='itemCountContainer'>
            <div>
                <button className='masmenos' disabled={count <= 1} onClick={handleSubtract}>
                    -
                </button>
                <label className='contador'>{count}</label>
                <button className='masmenos' disabled={count >= stock} onClick={handleAdd}>
                    +
                </button>
            </div>
            <div>
        <button className='agregar' disabled={stock <= 0} onClick={handleClick}>
            Agregar al  Carrito
        </button>
            </div>
        </div>
    )
}

export default ItemCount