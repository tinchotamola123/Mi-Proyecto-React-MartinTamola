import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return ( 
        <>
        {[
            'Secondary',
        ].map((variant) => (
            <Card 
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="cart mb-5 mt-5"
            >
            <Card.Header><Card.Img variant="top" src={product.pictureUrl} /></Card.Header>
            <Card.Body>
                <Card.Title className='cart'>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                <Button variant="primary" as={Link} to={`s/item/${product.id}`}>
                    Ver detalle
                </Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Item;









/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Button variant="primary">Añadir al Carrito</Button>
            </Card.Body>
        </Card> */