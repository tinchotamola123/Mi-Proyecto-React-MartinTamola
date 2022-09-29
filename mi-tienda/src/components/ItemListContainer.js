import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import Counter from './ItemCount';
import ItemList from './ItemList';
import Carusel from './Carousel';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { getProducts } from '../utils/products';

const ItemListContainer = ({ greeting }) => {
    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        console.log(categoryName)
    }, [categoryName])
    
    useEffect(()=>{
        getProducts()
        .then((data)=> setProducts(data))
        .catch((error) => console.error(error))
    },[])

    return (
        <Container className=''>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products} />
            <Carusel />
            <Counter />
        </Container>
    );
}

export default ItemListContainer;