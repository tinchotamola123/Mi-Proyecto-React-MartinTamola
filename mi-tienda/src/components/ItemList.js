import './ItemList.css'
import Item from "./Item";
import { Container } from "react-bootstrap";

const ItemList = ({ products }) => {
    return ( 
        <>
        <h1>Lista de Productos</h1>
            <Container className="vista">
                {products.map((product) =>(<Item key={product.id} product={product}/>))}
            </Container>
            
        
        </>
    );
}

export default ItemList;