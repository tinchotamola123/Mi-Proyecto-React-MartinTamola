import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import Counter from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    
    return (
        <Container className='mt-5'> 
            <h3 className="greeting">{greeting}</h3>
            <p>Productos</p>
            <Counter />
        </Container>
    );
}

export default ItemListContainer;