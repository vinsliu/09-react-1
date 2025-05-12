import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

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
              <Nav.Link to="/" as={Link}>
                Accueil
              </Nav.Link>
              <Nav.Link to="/category/vetements" as={Link}>
                Vêtements
              </Nav.Link>
              <Nav.Link to="/category/chaussures" as={Link}>
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
