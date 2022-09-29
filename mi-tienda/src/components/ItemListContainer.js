import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import Counter from './ItemCount';
import ItemList from './ItemList';
import Carusel from './Carousel';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const products = [
    {id: 1, name:'Vapo1', description:'Electronico', stock:20 , imagen:'http://rosariovapeshop.com/wp-content/uploads/2020/09/vaporesso-revenger-x-kit_black.jpg'},
    {id: 2, name:'Vapo2', description:'Mecanico', stock:20 , imagen:'https://vapeomex.com/wp-content/uploads/2019/02/blackcamo_standing-min.png'},
    {id: 3, name:'Vapo3', description:'Kit de Inicio', stock:20 , imagen:'https://www.momo-once.com.ar/wp-content/uploads/2018/06/vape-kits-smoktech-stick-v8-kit-with-tfv8-big-baby-beast-tank-1_grande.jpg'}
]

const ItemListContainer = ({ greeting }) => {
    const {categoryName} = useParams();
    
    useEffect(()=>{
        console.log(categoryName)
    }, [categoryName])
    
    return (
        <Container className=''>
            <Carusel />  
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products} />
            <Counter />
        </Container>
    );
}

export default ItemListContainer;