import "./App.css";
import { Container } from "react-bootstrap";
import Profile from "./components/Profile";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        {" "}
        <Profile></Profile>
      </Container>
    </>
  );
}

export default App;
