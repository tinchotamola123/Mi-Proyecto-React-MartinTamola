import './Home.css';

const Home = () => {
    return ( 
        <>
            <p className="fonthome">
                Bienvenidos a VapeBoss - Tienda De Vaporizadores        
            </p>
            <img className="imagenportada" src="https://images.pexels.com/photos/4030818/pexels-photo-4030818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="TiendaVapeBoss"></img>
            <p className="fonthome">
                Vaporizadores , Resistencias , Liquidos. <br></br>Todo para vos.
            </p>
            <div className='footer'>
              By Martin Tamola 2022
            </div>
        </>
    );
}

export default Home;