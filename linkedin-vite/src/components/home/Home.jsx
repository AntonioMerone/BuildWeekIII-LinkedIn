import { Container, Row, Col } from "react-bootstrap"
import MyNavbar from "../MyNavbar"
import SidebarDx from "./SidebarDx"

export default function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container style={{ paddingTop: "5.5rem" }}>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}></Col>
          <Col xs={12} lg={3}>
            <SidebarDx />
          </Col>
        </Row>
      </Container>
    </>
  )
}
