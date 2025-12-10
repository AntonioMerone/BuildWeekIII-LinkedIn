import ProfileHeader from "./ProfileHeader"
import SuggestedForYou from "./SuggestedForYou"
import Analytics from "./Analytics"
import Activity from "./Activity"
import Experience from "./Experience"
import Education from "./Education"

export default function Profile({ user }) {
  return (
    <>
      <ProfileHeader user={user} />

      <SuggestedForYou />
      <Analytics />
      <Activity />
      <Experience />
      <Education />
    </>
  )
}
