import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    useEffect(()=>{
        console.log(id);
    },[id])

    return ( 
        <Container>
            <h1>Detalle del Producto</h1>
        </Container>
        
    );
}

export default ItemDetailContainer;