import './ItemListContainer.css'
import Container from 'react-bootstrap/Container'

const ItemListContainer = ({ greeting }) => {
    //TODO mostrar la props greeting
    //TODO ubicarlo dentro del Apps.js y abajo del NavBar.js
    return (
        <Container className='mt-5'> 
            <h3 className="greeting">{greeting}</h3>
            <p>Productos</p>
        </Container>
    );
}

export default ItemListContainer;