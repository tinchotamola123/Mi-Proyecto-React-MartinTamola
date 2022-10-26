import Carusel from "./ItemList/Carousel";
import './Galeria.css';

const Galeria = () => {
    return ( 
        <>
        <h4 className="fotos">Wallpapers</h4>
        <Carusel>
        </Carusel>
        <div className='footer'>
            By Martin Tamola 2022
        </div>
        </>
    );
}

export default Galeria ;