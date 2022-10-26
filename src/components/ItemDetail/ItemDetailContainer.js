import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        <>
        <div className='detalle'>
            {product && <ItemDetail product={product} />}
        </div>
        <div className='footer'>
        By Martin Tamola 2022
        </div>
        </>
    );
}

export default ItemDetailContainer;