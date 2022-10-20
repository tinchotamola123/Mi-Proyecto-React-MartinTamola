import { Container , Navbar , Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import LogoVB from "../../assets/img/LogoVB.png";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <Navbar variant="dark" className="nav">
            <Container>
                <Navbar.Brand as={Link} to='/Home'>
                <img src={LogoVB} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to='/Home'>
                    VapeBoss <br></br>Tienda de Vaporizadores
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Catalogo</Nav.Link>
                    <Nav.Link as={Link} to='/category/vapos'>Vaporizadores</Nav.Link>
                    <Nav.Link as={Link} to='/category/resis'>Resistencias</Nav.Link>
                    <Nav.Link as={Link} to='/category/liquido'>Líquidos</Nav.Link>
                    <Nav.Link as={Link} to='/galeria'>Galeria</Nav.Link>
                    <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                </Nav>
                <CartWidget as={Link} to='/cart'/>
            </Container> 
        </Navbar>    
    )
}

export default NavBar;