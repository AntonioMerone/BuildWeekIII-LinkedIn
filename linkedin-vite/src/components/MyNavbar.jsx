import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap"

import logo from "../assets/linkedin-logo.webp"
import user from "../assets/user.png"
import "../assets/css/MyNavbar.css"

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top py-0">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#">
          <img src={logo} height="40" alt="logo" />
        </Navbar.Brand>

        {/* SEARCH BAR – SEMPRE VISIBILE */}
        <Form className="d-flex position-relative flex-grow-1">
          <i
            className="bi bi-search position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#666",
              fontSize: "16px",
            }}
          ></i>

          <FormControl
            type="search"
            placeholder="Cerca"
            className="rounded-4 ps-5"
          />
        </Form>

        {/* MENU COMPLETO – SOLO DA LG IN POI */}
        <Navbar.Collapse id="main-navbar" className="justify-content-center ">
          <Nav className="align-items-center">
            <Nav.Link href="#" className="text-center me-3">
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
                    src={user}
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
            ></NavDropdown>

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
