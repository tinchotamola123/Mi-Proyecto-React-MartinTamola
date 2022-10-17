import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import Carusel from '../ItemList/Carousel';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        if(categoryId){
            getProductsByCategory(categoryId)
                .then((data)=> setProducts(data))
                .catch((error) => console.warn(error))
        }else{
            getAllProducts()
                .then((data)=> setProducts(data))
                .catch((error) => console.warn(error))
        }    
    },[categoryId])

    return (
        <Container>
            <h1 className="greeting">{greeting}</h1>
            {/* <Carusel />  */}
            <ItemList products={products} />
        </Container>
    );
}

export default ItemListContainer;