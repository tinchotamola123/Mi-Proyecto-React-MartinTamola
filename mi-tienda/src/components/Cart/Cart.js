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
        <div className='carrito'>
            <h1>Carrito de Compras</h1>
            {
            showTable && (
            <>
            <div className='cajatabla'>    
            <Table striped bordered hover className='tablacarrito'>
            <thead className='headtabla'>
                <tr>
                    <th className='celdas'>Titulo</th>
                    <th className='celdas'>Precio</th>
                    <th className='celdas'>Cantidad</th>
                    <th className='celdas'>Accion</th>
                </tr>
            </thead>
            <tbody className='bodytabla'>
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
            </div>
            <h3 className='total'>Total: $ {total}</h3>
            <Link to='/'>
                <Button variant="success">Seguir comprando</Button>
            </Link>
            <Button className='compra' variant='success' onClick={handleOpen}>Finalizar compra</Button>
            <Button className='vaciartotal' variant='danger' onClick={() => handleRemoveAll(clear())}>Vaciar Carrito</Button>
            </>
            )}
            {
            !showTable && (
            <>
            <div className='contendorcarro'>
            <h4>Carrito de compras vacio<br></br>Vamos a comprar !!!</h4>
            <img className='imgcarro' src='https://images.pexels.com/photos/5624980/pexels-photo-5624980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='carritovacio'></img>
            <Link to='/'>
                <Button variant="success">Ver Productos</Button>
            </Link>
            </div>
            </>
            )}
            <OrderModal 
                showModal={showModal}
                onClose={handleClose}
                onBuy={handleBuy}
                orderId={orderId}
                />
        </div>
    );
}

export default Cart;