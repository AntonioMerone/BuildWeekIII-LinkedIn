import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../MyNavbar";
import SidebarDx from "./SidebarDx";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import HomeFeed from "./HomeFeed";
import ProfileFooter from "../ProfileFooter";
import HomeFooter from "../HomeFooter";
export default function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container style={{ paddingTop: "5.5rem" }}>
        <Row>
          <Col lg={3}>
            <div style={{ position: "sticky", top: "90px" }}>
              <LeftSidebar />{" "}
            </div>
          </Col>
          <Col lg={6}>
            <Feed />
            <HomeFeed />
          </Col>
          <Col xs={12} lg={3}>
            <SidebarDx />
            <HomeFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
}
