import { useState } from 'react';
import './ItemCount.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClickMas = () => {
        setCount(count + 1);
    };
    const handleClickMenos = () => {
        if(count === 0){

        }else{
        setCount(count - 1);
        }
    };
    const AgregarAlCarrito = () => {
        alert("Agregado Correctamente")
    };
    return (
        <>
        <div className='contador'>
            <button onClick={handleClickMenos}><b>-</b></button>
            <h4> {count} </h4>
            <button onClick={handleClickMas}><b>+</b></button>
        </div>
        <div>
            <button onClick={AgregarAlCarrito}>Agregar al Carrito</button>
        </div>
        </>
    );
};
    
export default Counter;