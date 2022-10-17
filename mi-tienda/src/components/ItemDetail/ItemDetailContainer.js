import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProduct } from '../../utils/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product , setProduct] = useState();
    const { id } = useParams();
    
    
    useEffect(()=>{
        getProduct(id)
        .then((data)=> {
            setProduct(data)    
        })
        .catch(error => console.warn(error))
    },[id])
    
    return ( 
        <Container className='detalle'>
            {product && <ItemDetail product={product} />}
        </Container>
        
    );
}

export default ItemDetailContainer;