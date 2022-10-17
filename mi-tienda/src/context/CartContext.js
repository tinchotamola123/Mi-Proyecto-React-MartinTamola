import { createContext , useState} from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({children}) =>{
    const [cart , setCart] = useState([]);

    const addItem = (product , quantity) => {
        
        if(!isInCart(product.id)){
            const item = {
                ...product,
                quantity
            };
            setCart([...cart , item]);
        }else{
            //actualizar quantity
            //buscamos el item en el carrito, en el array, su ubicacion para despues poder actualizar este item
            const itemIndex = cart.findIndex((item)=> item.id === parseInt(product.id));
            //creamos un borrador del item para poder moficarlo y evitar la modificacion del estado 
            const itemDraft = {...cart[itemIndex]};
            //actualizamos la quantity en el borrador 
            itemDraft.quantity = itemDraft.quantity + quantity;
            //creamos un borrador del carrito para poder actualizar el item
            const cartDraft = [...cart];
            //actualizamos el carrito borrador sin tocar el estado de react 
            cartDraft[itemIndex] = itemDraft;
            //cart[itemIndex] = itemDraft; prohibido ya que modifica el estado de react
            setCart(cartDraft);

            //version corta pero peligrosa, tocamos el estado de react, mutacion que no lo debemos hacer
            //const item = cart.find((item)=>item.id === parseInt(id));
            //item.quantity = item.quantity + quantity;
            //setCart([...cart]);
        }
    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item)=> item.id !== itemId);
        setCart(cartDraft);
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

    const total = cart.reduce((count , item)=> count + (item.price * item.quantity) , 0);

        /* let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity
        });  */

    const totalQuantity = cart.reduce((count , item)=> count + item.quantity , 0);

    return (
        <CartContext.Provider value={{ cart , addItem , removeItem , clear , isInCart , total , totalQuantity}}>
            {children}
        </CartContext.Provider>    
    )
}