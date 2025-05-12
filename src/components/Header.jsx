import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useMatch } from "react-router";
import "./header.css";

function Header() {
  const match = useMatch("/category/:categoryId");

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              {match ? (
                <p className="m-0">Catégorie : {match.params.categoryId}</p>
              ) : (
                ""
              )}
            </Nav>
            <Nav className="ms-auto align-items-center">
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
