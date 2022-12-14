import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
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

    //acceso a una coleccion -> list
  /* useEffect(()=>{
    //obtenemos la base de datos
    const database = getFirestore();

    //obtenemos la referencia a la coillection item
    const collectionReference = collection(database, 'items');

    //obtenemos los datos a partir de la referencia creada
    getDocs(collectionReference)
      .then((snapshot) =>{
        const list = snapshot
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          console.log(list);
      })
      .catch(error=>console.warn(error));
  },[]); */


    return (
        <div className='vistacarro'>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products} />
            <div className='footer'>
              By Martin Tamola 2022
            </div>
        </div>
    );
}

export default ItemListContainer;