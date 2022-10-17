import { createContext , useState } from "react";

const FavoritosContext = createContext();

export default FavoritosContext;

export const FavoritosProvider = ({ children }) => {
    const [listaDeFavoritos , setListadeFavoritos] = useState([]);

    const agregarAFavoritos = (itemNuevo) => {
        console.log('AgregarAFavoritos: ' , itemNuevo);
    const yaestaEnFavoritos = listaDeFavoritos.some((item) =>item.id === itemNuevo.id);
    if (yaestaEnFavoritos) {
        //No lo agregamos de vuelta
        alert('Este producto ya esta en favoritos'); //no usar alert en el proyecto final
        return;
    } else {
        //no esta en favoritos, vamos a agregarlo
        setListadeFavoritos([...listaDeFavoritos, itemNuevo]);
    }
    }
    return(
        <FavoritosContext.Provider value={{listaDeFavoritos , agregarAFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

