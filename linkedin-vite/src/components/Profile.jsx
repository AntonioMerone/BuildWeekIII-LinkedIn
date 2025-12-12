import ProfileHeader from "./ProfileHeader";
import SuggestedForYou from "./SuggestedForYou";
import Analytics from "./Analytics";
import Activity from "./Activity";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.profileData);
  console.log("PROFILE USER:", user);
  return (
    <>
      <ProfileHeader user={user} />

      <SuggestedForYou />
      <Analytics />
      <Activity />
      <Experience />
      <Skills />
      <Education />
    </>
  );
}
