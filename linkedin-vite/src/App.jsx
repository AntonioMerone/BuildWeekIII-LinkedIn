import "./App.css"
import { Provider } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import Profile from "./components/Profile"
import MyNavbar from "./components/MyNavbar"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import ProfileSidebar from "./components/ProfileSidebar"
import ProfileFooter from "./components/ProfileFooter"
import { setProfileData } from "./reducers/profileReducerData.js"
import { store } from "./store.js"
import Home from "./components/home/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Jobs from "./components/jobs/Jobs.jsx"

function App() {
  return (
    <>
      <Provider store={store}>
        <Linkedin />
      </Provider>
    </>
  )
}

function Linkedin() {
  const dispatch = useDispatch()

  //const params = useParams();
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w"

  useEffect(() => {
    getProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getProfileData = async () => {
    try {
      const response = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json() // don't destructure unless API wraps it
        dispatch(setProfileData(data))
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile" element={<LinkedinProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </>
  )
}

function LinkedinProfile({ user }) {
  return (
    <>
      <MyNavbar user={user} />
      <Container style={{ paddingTop: "5.5rem" }}>
        <Row>
          <Col xs={12} md={8}>
            <Profile user={user} />
          </Col>
          <Col xs={12} md={4}>
            <ProfileSidebar />
          </Col>
        </Row>
      </Container>
      <ProfileFooter />
    </>
  )
}

export default App
