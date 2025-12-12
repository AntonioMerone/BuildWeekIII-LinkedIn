import { Card, Button } from "react-bootstrap"
import {
  FaVideo,
  FaImage,
  FaFileAlt,
  FaChevronDown,
  FaLinkedin,
  FaArrowRight,
  FaEllipsisH,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaPaperPlane,
} from "react-icons/fa"
import "../../assets/css/Feed.css"

import { useState } from "react"

// TODO questo va convertito in actions di stefano
import { setPostsData } from "../../reducers/postsReducerData"

import { useDispatch, useSelector } from "react-redux"

const CreatePostBox = () => {
  const dispatch = useDispatch()
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w"
  const [localPosts, setLocalPosts] = useState([])
  const user = useSelector((state) => state.profileData)
  const [text, setText] = useState("")

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
      } else {
        console.error("Error fetching posts")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const createPost = async (text) => {
    const url = "https://striveschool-api.herokuapp.com/api/posts/"

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w",
      },
      body: JSON.stringify({ text }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    //dispatch(addPostData(text));

    return res.json()
  }

  const handleSubmit = async () => {
    //dispatch(setPostsData(selectedPosts));
    getPosts()
    try {
      const result = await createPost(text)
      console.log("Created:", result)
      setText("")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card className="create-post-card">
      <textarea
        className="form-control mb-3"
        id="msg"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="create-post-top">
        <img src={user.image} alt="Profile" className="create-post-avatar" />
        <button onClick={handleSubmit} className="create-post-input">
          Crea un post
        </button>
      </div>

      <div className="create-post-actions">
        <button className="create-post-action">
          <FaVideo className="create-post-action-icon video" />
          Video
        </button>
        <button className="create-post-action">
          <FaImage className="create-post-action-icon photo" />
          Foto
        </button>
        <button className="create-post-action">
          <FaFileAlt className="create-post-action-icon article" />
          Scrivi un articolo
        </button>
      </div>
    </Card>
  )
}

const FeedFilter = () => (
  <div className="feed-filter">
    <div className="feed-filter-line" />
    <span>Seleziona la visualizzazione del feed:</span>
    <button className="feed-filter-select">
      Più rilevanti per primi <FaChevronDown size={10} />
    </button>
  </div>
)

const SuggestionItem = ({ name, role, degree, image, verified }) => (
  <div className="suggestion-item">
    <img src={image} alt={name} className="suggestion-avatar" />
    <div className="suggestion-content">
      <div className="suggestion-name">
        {name}
        {verified && <FaLinkedin className="suggestion-badge" />}
        <span className="suggestion-degree">• {degree}</span>
      </div>
      <p className="suggestion-role">{role}</p>
      <Button
        variant="outline-primary"
        size="sm"
        className="suggestion-follow-btn"
      >
        + Segui
      </Button>
    </div>
  </div>
)

const SuggestionsCard = () => {
  const suggestions = [
    {
      name: "Bill Gates",
      role: "Chair, Gates Foundation and Founder, Breakthrough Energy",
      degree: "3° e oltre",
      verified: true,
      image: "https://placebear.com/60/60",
    },
    {
      name: "Vincenzo Schettini",
      role: "#lafisicachecipiace",
      degree: "3° e oltre",
      verified: false,
      image: "https://placebear.com/61/61",
    },
    {
      name: "Pietro Innocenti",
      role: "CEO at Porsche Italia S.p.a.",
      degree: "3° e oltre",
      verified: true,
      image: "https://placebear.com/62/62",
    },
  ]

  return (
    <Card className="suggestions-card mb-3">
      <h3 className="suggestions-title">Consigli per te</h3>
      {suggestions.map((s, i) => (
        <SuggestionItem key={i} {...s} />
      ))}
      <a href="#" className="suggestions-show-more">
        Visualizza altro <FaArrowRight />
      </a>
    </Card>
  )
}

const PostCard = ({ author, followers, sponsored, text, image }) => (
  <Card className="post-card">
    <div className="post-header">
      <img src={author.image} alt={author.name} className="post-avatar" />
      <div className="post-author-info">
        <div className="post-author-name">{author.name}</div>
        <div className="post-author-followers">{followers} follower</div>
        {sponsored && <div className="post-sponsored">Post sponsorizzato</div>}
      </div>
      <button className="post-menu-btn">
        <FaEllipsisH />
      </button>
    </div>

    <div className="post-content">
      <p className="post-text">
        {text} <span className="post-more">... altro</span>
      </p>
    </div>

    {image && <img src={image} alt="Post" className="post-image" />}

    <div className="post-actions">
      <button className="post-action-btn">
        <FaThumbsUp className="post-action-icon" /> Consiglia
      </button>
      <button className="post-action-btn">
        <FaComment className="post-action-icon" /> Commenta
      </button>
      <button className="post-action-btn">
        <FaShare className="post-action-icon" /> Diffondi
      </button>
      <button className="post-action-btn">
        <FaPaperPlane className="post-action-icon" /> Invia
      </button>
    </div>
  </Card>
)

const Feed = () => {
  return (
    <div className="feed">
      <CreatePostBox />
      <FeedFilter />
      <SuggestionsCard />
    </div>
  )
}

export default Feed
