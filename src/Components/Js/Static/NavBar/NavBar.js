import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import '../../../css/StyleNavba.css';
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>Pet Paradise</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/LoginPage">Ingresar a cuenta</NavDropdown.Item>
                <NavDropdown.Item href="/CreateAccount"> Crear cuenta </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/FormAdoptPet">Añadir nueva mascota</NavDropdown.Item>
                <NavDropdown.Item href='/AllAdoptionRequest'>Solicitudes de adopcion</NavDropdown.Item>
                <NavDropdown.Item href="/AboutUs">  Sobre nosotros...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;