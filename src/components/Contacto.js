import LogoVB from "../assets/img/LogoVB.png";
import'./Contacto.css';

const Contacto = () => {
    return ( 
        <>
        <div className="nosotros">
            <img className="imgnosotros" src={LogoVB} alt='LogoVB'></img>
            <p>
            VAPEBOSS Contacto:
            <br></br>
            <br></br>
            MARTIN TAMOLA
            <br></br>
            <br></br>
            Celular: +54 9 2617213130
            <br></br>
            <br></br>
            Email: tinchotamola123@gmail.com
            </p>
        </div>
            <div className='footer'>
                By Martin Tamola 2022
            </div>
        </>
    );
}

export default Contacto;