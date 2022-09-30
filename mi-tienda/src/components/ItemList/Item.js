import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return ( 
        <Card className='cart' style={{ width: '18rem' }}>
            <Card.Img className='borde' variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title className='cart'>{product.title}</Card.Title>
                <Card.Text className='cart'>{product.description}</Card.Text>
                <Card.Text className='cart'>${product.price}</Card.Text>
                <Link to={`/item/${product.id}`}>
                    <Button variant="dark">
                    Ver Detalle
                    </Button>
                </Link>
            </Card.Body>
        </Card>
        );
    }

export default Item;