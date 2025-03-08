import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              ¿Quiénes Somos?
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Servicios
            </Nav.Link>
            <NavDropdown title="Recomendaciones" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/procesos_lavado">
                Procesos de Lavado
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tips">
                Consejos
              </NavDropdown.Item>
            </NavDropdown>
            {/* PROMOCIONES 
            <Nav.Link as={Link} to="/promotions">
              Promociones
            </Nav.Link>*/}
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
