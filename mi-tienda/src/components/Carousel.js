import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const Carusel = () => {
    return ( 
        <Carousel className='CaruselImg'>
            <Carousel.Item>
                <img className="w-100" src="https://img.freepik.com/foto-gratis/cigarrillo-electronico-dispositivo-vapeo_144627-30850.jpg?w=1380&t=st=1663625162~exp=1663625762~hmac=dd9eb299df5eadfa30219d41f1353d67ea983b9d6b2e60cc6795c6ae731af5e5" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src="https://img.freepik.com/foto-gratis/joven-bella-mujer-morena-fumando-vaping-cigarrillo-electronico-humo-pared-negra_231208-3643.jpg?w=1380&t=st=1663627234~exp=1663627834~hmac=bc88ca181fa09130404d170092687fce537781de7daf40e86d8ac7a7883713a8" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-100" src="https://img.freepik.com/foto-gratis/hombre-vaping-cigarrillo-electronico_158595-3037.jpg?w=1380&t=st=1663627254~exp=1663627854~hmac=f5ab819261b0f71f05f9b613c9cbdf77953aef0d424d953b44abb953f29b8626" alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;