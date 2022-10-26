import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Item = ({ product }) => {

    const [showItemDetail , setShowItemDetail] = useState(true);

    const handleDetail = () => {
        setShowItemDetail(false);
    }

    return ( 
        <>
        {showItemDetail && (
            <Card className='cart' style={{ width: '18rem' }}>
            <Card.Img className='borde' variant="top" src={product.pictureUrl} />
            <Card.Body className='cartBody'>
                <Card.Title className='carttitle'>{product.title}</Card.Title>
                <Card.Text className='cartdescription'>{product.description}</Card.Text>
                <Card.Text className='cartprice'>${product.price}</Card.Text>
                <p className='cartstock'>Stock - {product.stock}</p>
                <Link to={`/item/${product.id}`}>
                    <Button onClick={handleDetail} variant="dark" >
                    Ver Detalle
                    </Button>
                </Link>
            </Card.Body>
        </Card>)
        }
        {!showItemDetail && (
            <Card className='cart' style={{ width: '18rem' }}>
            <Card.Img className='borde' variant="top" src={product.pictureUrl} />
            <Card.Body className='cartBody'>
                <Card.Title className='carttitle'>{product.title}</Card.Title>
                <Card.Text className='cartdescription'>{product.description}</Card.Text>
                <Card.Text className='cartprice'>${product.price}</Card.Text>
                <p className='cartstock'>Stock - {product.stock}</p>
                
            </Card.Body>
        </Card>) 
        }
        </>
        );
    }

export default Item;