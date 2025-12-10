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
  const user = {
    _id: "653f5b02b397340014d5e7fa",
    name: "Simone",
    surname: "D'Angelo",
    email: "simone.dangelo636@gmail.com",
    username: "simo",
    title: "",
    bio: "",
    area: "",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    createdAt: "2023-10-30T07:28:02.447Z",
    updatedAt: "2023-10-30T07:28:02.447Z",
    v: 0,
  }

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
