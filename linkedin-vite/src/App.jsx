import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./components/Profile";
import MyNavbar from "./components/MyNavbar";
import ProfileSidebar from "./components/ProfileSidebar";
import ProfileFooter from "./components/ProfileFooter";
function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Profile />
          </Col>
          <Col xs={12} md={4}>
            <ProfileSidebar />
          </Col>
        </Row>
      </Container>
      <ProfileFooter />
    </>
  );
}

export default App;
