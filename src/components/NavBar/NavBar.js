import { Navbar , Nav , Container} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import LogoVB from "../../assets/img/LogoVB.png";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <Navbar className="navbar" collapseOnSelect expand="sm" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Brand as={Link} to='/Home'>
                <img src={LogoVB} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to='/Home'>
                    <h1>VapeBoss</h1> 
                </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Catalogo</Nav.Link>
                    <Nav.Link as={Link} to='/category/vapos'>Vaporizadores</Nav.Link>
                    <Nav.Link as={Link} to='/category/resis'>Resistencias</Nav.Link>
                    <Nav.Link as={Link} to='/category/liquido'>Líquidos</Nav.Link>
                    <Nav.Link as={Link} to='/galeria'>Wallpapers</Nav.Link>
                    <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                </Nav>
                <CartWidget as={Link} to='/cart'/>    
            </Navbar.Collapse>
            </Container>
        </Navbar>    
    )
}

export default NavBar;