import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Card.Header><Card.Img variant="top" src={product.imagen} /></Card.Header>
            <Card.Body>
                <Card.Title className='cart'>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Añadir al Carrito</Button>
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