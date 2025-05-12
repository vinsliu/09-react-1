import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import "./header.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Accueil
              </Nav.Link>
              <Nav.Link to="/category/vetements" as={NavLink}>
                Vêtements
              </Nav.Link>
              <Nav.Link to="/category/chaussures" as={NavLink}>
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
