import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  NavDropdown,
  InputGroup,
  Button,
} from "react-bootstrap"

import logo from "/public/linkedin-logo.webp"
import "../assets/css/MyNavbar.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function MyNavbar() {
  const user = useSelector((state) => state.profileData)
  return (
    <Navbar bg="light" expand="lg" className="fixed-top py-0">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#">
          <img src={logo} height="40" alt="logo" />
        </Navbar.Brand>

        {/* SEARCH BAR – SEMPRE VISIBILE */}
        <Form className="flex-grow-1">
          <InputGroup>
            <InputGroup.Text
              className="bg-white border-end-0"
              style={{ borderRadius: "50px 0 0 50px" }}
            >
              <i className="bi bi-search" style={{ color: "#666" }}></i>
            </InputGroup.Text>

            <FormControl
              placeholder="Cerca"
              className="border-start-0"
              style={{ borderRadius: "0 50px 50px 0" }}
            />
          </InputGroup>
        </Form>

        {/* MENU COMPLETO – SOLO DA LG IN POI */}
        <Navbar.Collapse id="main-navbar" className="justify-content-center ">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/" className="text-center me-3">
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "18px" }}
              ></i>
              <div className="small">Home</div>
            </Nav.Link>

            <Nav.Link href="#" className="text-center me-3">
              <i className="bi bi-people-fill" style={{ fontSize: "18px" }}></i>
              <div className="small">Rete</div>
            </Nav.Link>

            <Nav.Link href="#" className="text-center me-2">
              <i
                className="bi bi-briefcase-fill"
                style={{ fontSize: "18px" }}
              ></i>
              <div className="small">Lavoro</div>
            </Nav.Link>

            <Nav.Link href="#" className="text-center me-2">
              <i
                className="bi bi-chat-dots-fill"
                style={{ fontSize: "18px" }}
              ></i>
              <div className="small">Messaggistica</div>
            </Nav.Link>

            <Nav.Link href="#" className="text-center me-2">
              <i className="bi bi-bell-fill" style={{ fontSize: "18px" }}></i>
              <div className="small">Notifiche</div>
            </Nav.Link>

            {/* DROPDOWN "TU" */}
            <NavDropdown
              title={
                <div className="nav-user-title">
                  <img
                    src={user.image || "/default-avatar.png"}
                    alt="avatar"
                    className="rounded-circle"
                    width="28"
                  />
                  <div className="nav-user-label">
                    <span className="small">Tu</span>
                    <span className="nav-arrow">▾</span>
                  </div>
                </div>
              }
              id="dropdown-tu"
              align="end"
              className="ms-3 nav-tu"
            >
              <NavDropdown.Item as={Link} to="/profile">
                <Button variant="primary" as={Link} to="/profile">
                  Visualizza profilo
                </Button>
              </NavDropdown.Item>
            </NavDropdown>

            {/* SEPARATORE */}
            <div
              style={{
                width: "1px",
                height: "3rem",
                backgroundColor: "#ccc",
                margin: "0 12px",
              }}
            ></div>

            {/* DROPDOWN PER LE AZIENDE */}
            <NavDropdown
              title={
                <div className="nav-user-title">
                  <i
                    className="bi bi-grid-3x3-gap-fill"
                    style={{ fontSize: "25px" }}
                  ></i>
                  <div className="nav-user-label">
                    <span className="small">Per le aziende</span>
                    <span className="nav-arrow">▾</span>
                  </div>
                </div>
              }
              id="dropdown-aziende"
              align="end"
              className="ms-2 nav-aziende"
            ></NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
