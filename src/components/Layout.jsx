import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
