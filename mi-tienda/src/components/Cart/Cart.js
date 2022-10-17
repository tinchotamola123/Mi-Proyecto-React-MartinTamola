import './Cart.css';
//import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { BsTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart , total , removeItem} = useContext(CartContext);

    console.log({cart , total});

    const handleClick = (itemId) =>{
        removeItem(itemId);
    }

    const showTable = cart.length > 0 ;

    return ( 
        <Container className='tablacarrito'>
            <h1>Carrito de Compras</h1>
            {
            showTable && (
            <>    
            <Table striped bordered hover className='tablacarrito'>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody className='tablacarrito'>
                {cart.map((item)=>(    
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><BsTrashFill className='tachobasura' onClick={() => handleClick(cart[0].id)} /></td>
                </tr>
                ))}
            </tbody>
            </Table>
            <h3>Total: $ {total}</h3>
            </>
            )}
            {
            !showTable && (
            <>
            <h3>Carrito de compras vacio</h3>
            <Link to='/'>
                <Button variant="success">Ver Productos</Button>
            </Link>
            </>
            )}
        </Container>
    );
}

export default Cart;