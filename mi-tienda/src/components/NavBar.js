import { Container , Navbar , Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './NavBar.css';
import LogoVB from "../assets/img/LogoVB.png";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <Navbar variant="dark" className="nav">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                <img src={LogoVB} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to='/'>
                    VapeBoss <br></br>Tienda de Vaporizadores
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/item/id'>Vaporizadores</Nav.Link>
                    <Nav.Link as={Link} to='/cart'>Resistencias</Nav.Link>
                    <Nav.Link as={Link} to='/'>Contacto</Nav.Link>
                    <Nav.Link as={Link} to='/'>Nosotros</Nav.Link>
                </Nav>
                <CartWidget as={Link} to='/cart'/>
            </Container> 
        </Navbar>    
    )
}

export default NavBar;