import ProfileHeader from "./ProfileHeader";
import SuggestedForYou from "./SuggestedForYou";

export default function Profile() {
  const user = {
    name: "Antonio",
    location: "Italy",
    headline: "esempio di headline",
  };

  return (
    <>
      <ProfileHeader user={user} />

      <SuggestedForYou />
    </>
  );
}
