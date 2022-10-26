import './ItemList.css'
import Item from "../ItemList/Item";

const ItemList = ({ products }) => {
    return ( 
        <>
        <h1>Lista de Productos</h1>
            <div className="vista">
                {products.map((product) =>(<Item key={product.id} product={product}/>))}
            </div>
            
        
        </>
    );
}

export default ItemList;