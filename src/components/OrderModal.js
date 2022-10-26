import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import './OrderModal.css';


const OrderModal = ({ showModal , onClose , onBuy , orderId}) => {

    return ( 
        <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
                    name='nombre' 
                    type="text" 
                    placeholder="Ingrese Nombre" 
            />
            <Form.Label>Telefono</Form.Label>
            <Form.Control
                    name='telefono' 
                    type="number" 
                    placeholder="Ingrese Numero" 
            />
            <Form.Label>Email</Form.Label>
            <Form.Control 
                    name='email' 
                    type="email" 
                    placeholder="Ingrese Email" 
            />
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                <Button className='cancelar' onClick={onClose}>
                    Cancelar
                </Button>
                <Button className='pagar' onClick={onBuy}>
                    Pagar
                </Button>
                </>
            )}
            {orderId && (
            <div className='ordencompletada'>
            <Alert key='success' variant='success' className='orden'>
                Numero de orden: {orderId}
            </Alert>
            <Link to='/'>
                <Button variant="success" className='otracompra'>
                    Comprar nuevamente
                </Button>
            </Link>
            </div>
            )}
        </Modal.Footer>
    </Modal>
    );
}

export default OrderModal;