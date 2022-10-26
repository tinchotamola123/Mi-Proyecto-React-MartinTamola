import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import carusel1 from "../../assets/img/carusel1.jpg";
import carusel2 from "../../assets/img/carusel2.jpg";
import carusel3 from "../../assets/img/carusel3.jpg";
import carusel4 from "../../assets/img/carusel4.jpg";
import carusel5 from "../../assets/img/carusel5.jpg";

const Carusel = () => {
    return ( 
        <Carousel className='CaruselImg'>
            <Carousel.Item>
                <img className="w-75" src={carusel1} alt="Primer slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-75" src={carusel2} alt="Segundo slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-75" src={carusel3} alt="Tercer slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-75" src={carusel4} alt="Cuarto slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-75" src={carusel5} alt="Quinto slide"/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;