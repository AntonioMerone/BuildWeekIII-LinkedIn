import { Card, Button } from "react-bootstrap"
import { FaTimes, FaBriefcase } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import "../assets/css/Experience.css"

import { getExperienceData } from "../reducers/experienceReducerData"

const ExperienceItem = ({ title, company, period }) => (
  <div className="experience-item">
    <div className="experience-icon">
      <FaBriefcase />
    </div>
    <div>
      <h4 className="experience-item-title">{title}</h4>
      <p className="experience-item-company">{company}</p>
      <p className="experience-item-period">{period}</p>
    </div>
  </div>
)

const Experience = () => {
  const dispatch = useDispatch()

  const experiences = useSelector((state) => state.experienceData)

  const profileData = useSelector((state) => state.profileData)

  const [localPosts, setLocalPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTNiZmI3NDY4MTc3YzAwMTUxMTI3NTMiLCJpYXQiOjE3NjU1Mzg5OTQsImV4cCI6MTc2Njc0ODU5NH0.peMGr6PFyZPec-SLZNSFdTmZ2Y4TWhK3k0vjqGzSPwQ"

  useEffect(() => {
    if (!profileData._id) return
    console.log("profileData._id =", profileData?._id)

    getExperiences(profileData._id)
  }, [profileData])

  const getExperiences = async (id) => {
    const baseEndpoint =
      `https://striveschool-api.herokuapp.com/api/profile/` +
      id +
      `/experiences`
    console.log(baseEndpoint)
    try {
      const response = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        const experiences = data.slice(-4).reverse()
        setLocalPosts(experiences)
        dispatch(getExperienceData(experiences))
        console.log(experiences)
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
    <Card className="experience-card mt-2">
      <Card.Body>
        <div className="experience-header">
          <h3 className="experience-title">Esperienza</h3>
          <Button variant="link" className="experience-close-btn">
            <FaTimes />
          </Button>
        </div>

        <p className="experience-desc">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più
          visualizzazioni del profilo e collegamenti
        </p>

        {experiences.map((exp) => (
          <ExperienceItem
            key=""
            title={exp.role} // ← extracted
            company={exp.company} // ← extracted
            period={`${exp.startDate} - ${exp.endDate ?? "Present"}`}
          />
        ))}

        <Button variant="outline-primary" className="experience-add-btn">
          Aggiungi esperienza
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Experience
