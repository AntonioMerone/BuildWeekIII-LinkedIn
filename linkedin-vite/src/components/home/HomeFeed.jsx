import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Button, Image, Spinner } from "react-bootstrap"
import {
  HandThumbsUp,
  ChatText,
  Share,
  Send,
  ThreeDots,
  X,
  GlobeAmericas,
} from "react-bootstrap-icons"

import { setPostsData } from "../../reducers/postsReducerData"

function HomeFeed() {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.postsData) || []

  const [localPosts, setLocalPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w"

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
      {/* SPINNER */}
      {loading && (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* ERRORE */}
      {error && !loading && (
        <div className="alert alert-danger mt-3">
          Si è verificato un errore nel caricamento dei post.
        </div>
      )}

      {!loading &&
        !error &&
        posts.map((post) => (
          <Card
            key={post._id}
            className="mb-2 rounded-3 border-secondary-subtle"
          >
            <Card.Body className="p-0">
              <div className="d-flex align-items-start p-3">
                <Image
                  src={post.user?.image || "https://placehold.co/50x50"}
                  roundedCircle
                  width={48}
                  height={48}
                  className="me-3 object-fit-cover border"
                />
                <div className="flex-grow-1">
                  <div className="fw-bold text-dark mb-0 d-flex align-items-center">
                    {post.user?.name} {post.user?.surname}
                    <span
                      className="text-muted ms-1"
                      style={{ fontSize: "0.8em" }}
                    >
                      • 1°
                    </span>
                  </div>
                  <div
                    className="text-muted small text-truncate"
                    style={{ maxWidth: "300px" }}
                  >
                    {post.user?.title || "Full Stack Developer"}
                  </div>
                  <div className="text-muted small d-flex align-items-center">
                    <span>
                      {new Date(post.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      •{" "}
                    </span>
                    <GlobeAmericas className="ms-1" size={12} />
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="transparent"
                    className="p-0 me-2 text-dark border-0"
                  >
                    <ThreeDots size={24} />
                  </Button>
                  <Button
                    variant="transparent"
                    className="p-0 text-dark border-0"
                  >
                    <X size={24} />
                  </Button>
                </div>
              </div>

              <Card.Text
                className="px-3 pb-2 m-0 text-dark"
                style={{ fontSize: "0.95rem" }}
              >
                {post.text}
              </Card.Text>

              {post.image && (
                <div className="w-100 bg-light">
                  <Image
                    src={post.image}
                    className="w-100 object-fit-contain"
                    style={{ maxHeight: "500px" }}
                    alt="Post content"
                  />
                </div>
              )}

              <div className="px-3 py-2 d-flex align-items-center border-bottom justify-content-between">
                <div className="d-flex align-items-center">
                  <span
                    className="badge rounded-circle bg-primary p-1 d-flex justify-content-center align-items-center"
                    style={{ width: 18, height: 18, zIndex: 2 }}
                  >
                    <HandThumbsUp color="white" size={10} />
                  </span>
                  <span
                    className="badge rounded-circle bg-success p-1 d-flex justify-content-center align-items-center ms-n1"
                    style={{
                      width: 18,
                      height: 18,
                      marginLeft: "-5px",
                      zIndex: 1,
                    }}
                  >
                    <span style={{ fontSize: 8 }}>❤️</span>
                  </span>
                  <span className="text-muted ms-2 small hover-underline cursor-pointer">
                    {Math.floor(Math.random() * 50) + 10}
                  </span>
                </div>
                <div className="text-muted small hover-underline cursor-pointer">
                  {Math.floor(Math.random() * 20)} commenti •{" "}
                  {Math.floor(Math.random() * 10)} diffusioni
                </div>
              </div>

              <div className="px-2 py-1 d-flex justify-content-between align-items-center">
                <Button
                  variant="white"
                  className="flex-grow-1 d-flex justify-content-center align-items-center text-secondary py-3 fw-semibold post-action-btn border-0"
                >
                  <HandThumbsUp size={20} className="me-2" />{" "}
                  <span className="d-none d-sm-inline">Consiglia</span>
                </Button>
                <Button
                  variant="white"
                  className="flex-grow-1 d-flex justify-content-center align-items-center text-secondary py-3 fw-semibold post-action-btn border-0"
                >
                  <ChatText size={20} className="me-2" />{" "}
                  <span className="d-none d-sm-inline">Commenta</span>
                </Button>
                <Button
                  variant="white"
                  className="flex-grow-1 d-flex justify-content-center align-items-center text-secondary py-3 fw-semibold post-action-btn border-0"
                >
                  <Share size={20} className="me-2" />{" "}
                  <span className="d-none d-sm-inline">Diffondi</span>
                </Button>
                <Button
                  variant="white"
                  className="flex-grow-1 d-flex justify-content-center align-items-center text-secondary py-3 fw-semibold post-action-btn border-0"
                >
                  <Send size={20} className="me-2" />{" "}
                  <span className="d-none d-sm-inline">Invia</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}

      <style>{`
        .post-action-btn:hover {
            background-color: #f3f2ef !important;
            border-radius: 5px;
        }
        .hover-underline:hover {
            text-decoration: underline;
            color: #0a66c2 !important;
        }
        .cursor-pointer {
            cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default HomeFeed
