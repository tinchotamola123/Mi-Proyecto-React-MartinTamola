import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import Counter from './ItemCount';
import ItemList from './ItemList';

const getProducts = () =>{
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            resolve(products);
        },2000)
    });
}

const products = [
    {id: 1, name:'Vapo1', description:'Electronico', stock:20},
    {id: 2, name:'Vapo2', description:'Mecanico', stock:20},
    {id: 3, name:'Vapo3', description:'Kit de Inicio', stock:20}
]


const ItemListContainer = ({ greeting }) => {
    
    return (
        <Container className='mt-5'> 
            <h3 className="greeting">{greeting}</h3>
            <p>Productos</p>
            <ItemList products={products} />
            <Counter />
        </Container>
    );
}

export default ItemListContainer;