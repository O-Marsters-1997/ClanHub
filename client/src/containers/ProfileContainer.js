import React from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileHistoryList from "../components/profile/ProfileHistoryList";


function ProfileContainer({ user, users }) {



  return (
    <div className="profile-container">
      <ProfileHeader/>
      <ProfileDetails user={user}/>
      <ProfileHistoryList user ={user}/>
      <Link to="/feed">Click to view your feed.</Link>
    </div>
  );
}

export default ProfileContainer;
