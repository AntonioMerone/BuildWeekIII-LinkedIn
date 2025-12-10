import ProfileHeader from "./ProfileHeader";
import SuggestedForYou from "./SuggestedForYou";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Profile({user}) {
  return (
    <>
      <ProfileHeader user={user} />

      <SuggestedForYou />
    </>
  );
}
