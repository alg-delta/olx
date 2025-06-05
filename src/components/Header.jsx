import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <img
            src="Жигуль.png"
            width="120"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ marginRight: "20px" }}
          />
          <Navbar.Brand as={NavLink} to="/">
            Авто
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/config">
              Нерухомість
            </Nav.Link>
            <Nav.Link as={NavLink} to="/obyava">
              Кросівки
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
