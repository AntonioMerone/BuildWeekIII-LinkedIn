import { Container, Row, Col } from "react-bootstrap"
import MyNavbar from "../MyNavbar"
import SidebarDx from "./SidebarDx"
import LeftSidebar from "./LeftSidebar"
import Feed from "./Feed"
import HomeFeed from "./HomeFeed"
import ProfileFooter from "../ProfileFooter"
import HomeFooter from "../HomeFooter"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { setPostsData } from "../../reducers/postsReducerData"

import setPostData from "./HomeFeed"

export default function Home() {
  const dispatch = useDispatch()

  const [localPosts, setLocalPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTNiZmI3NDY4MTc3YzAwMTUxMTI3NTMiLCJpYXQiOjE3NjU1Mzg5OTQsImV4cCI6MTc2Njc0ODU5NH0.peMGr6PFyZPec-SLZNSFdTmZ2Y4TWhK3k0vjqGzSPwQ"

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        const selectedPosts = data.slice(-11).reverse()
        setLocalPosts(selectedPosts)
        dispatch(setPostsData(selectedPosts))

        setLoading(false)
      } else {
        console.log("Error fetching posts")
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }
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
  )
}
