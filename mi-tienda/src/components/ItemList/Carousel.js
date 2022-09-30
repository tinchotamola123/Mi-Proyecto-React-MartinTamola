import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import carusel1 from "../../assets/img/carusel1.jpg";
import carusel2 from "../../assets/img/carusel2.jpg";
import carusel3 from "../../assets/img/carusel3.jpg";

const Carusel = () => {
    return ( 
        <Carousel className='CaruselImg'>
            <Carousel.Item>
                <img className="w-100" src={carusel1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src={carusel2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src={carusel3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;