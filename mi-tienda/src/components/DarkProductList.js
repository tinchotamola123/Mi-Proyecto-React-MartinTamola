import { useContext, useEffect, useState } from "react";
import ThemeContext , { ThemeProvider } from "../context/ThemeContext";
import Form from 'react-bootstrap/Form';
import { getAllProducts } from "../utils/products";
import './DarkProductList.css';

const Switch = () => {
    const { switchDarkMode } = useContext(ThemeContext);
    return (
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Activar/Desactivar dark mode"
            onClick={switchDarkMode}
        />
    )
} 

    const Item = ({product}) => {
    const {isDarkMode} = useContext(ThemeContext);
    const className = isDarkMode ? 'item-dark' : 'item-ligth';
    //const className = isDarkMode ? 'divdark' : 'item-ligth';

    return (
        <h4>
            <li className={className}>
                {product.title}
            </li>
        </h4>
    )
}

    const List = ({products}) => {
        return (
            <>
                {products.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </>
    )
}

    const DarkProductList = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
    }, [])

    //const className = isDarkMode ? 'container-dark' : '';

    return (
        <div className="divDark">
            <h1>Lista de Productos</h1>
                <ThemeProvider>
                    <Switch />
                    <List products={products} />
                </ThemeProvider>
        </div>
    );
}

export default DarkProductList;