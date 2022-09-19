import { Container , Navbar , Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css'

const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    VapeBoss | Tienda de Vaporizadores
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#vaporizadores">Vaporizadores</Nav.Link>
                    <Nav.Link href="#resistencias">Resistencias</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
                <CartWidget />
            </Container> 
        </Navbar>    
    )
}

export default NavBar;