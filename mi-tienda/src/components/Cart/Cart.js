import './Cart.css';
import { Button, Container } from "react-bootstrap";
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { BsTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { createOrder } from '../../utils/orders';
import OrderModal from '../OrderModal';


const buyerMock = {
    name: 'coderhouse',
    phone: '112234455',
    email: 'coderhouse@mail.com'
}

const Cart = () => {
    const {cart , total , removeItem , clear} = useContext(CartContext);
    const [user , setUser] = useState(buyerMock);
    const [showModal , setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();


    const handleRemove = (itemId) =>{
        removeItem(itemId);
    }
    const handleRemoveAll = (itemId) =>{
        clear();
    }
    const handleOpen = () =>{
        setShowModal(true);
    }
    const handleClose = () =>{
        setShowModal(false);
    }
    const handleBuy = async () =>{
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        };
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
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
                    <td><BsTrashFill className='tachobasura' onClick={() => handleRemove(cart[0].id)} /></td>
                </tr>
                ))}
            </tbody>
            </Table>
            <h3>Total: $ {total}</h3>
            <Button variant='success' onClick={handleOpen}>Finalizar compra</Button>
            <div className='vaciarCarro'>
            <p>Vaciar Carrito</p>
            <BsTrashFill className='tachobasura' onClick={() => handleRemoveAll(clear())} />
            </div>
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
            <OrderModal 
                showModal={showModal}
                onClose={handleClose}
                onBuy={handleBuy}
                orderId={orderId}
                />
        </Container>
    );
}

export default Cart;