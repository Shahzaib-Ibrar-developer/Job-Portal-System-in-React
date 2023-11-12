import React from "react";
import "./ProfileSection.css";
import { useUser } from "./UserContext"; // Adjust the path based on your project structure
import ImageUpload from "./ImageUpload";
const ProfileSection = () => {
  const { userData } = useUser();

  if (!userData) {
    return <p>Loading user Info...</p>;
  }

  return (
    <>
    <div>
     <ImageUpload />
     </div>
    <div className="profile">

      <h2>Profile Info</h2>
      {/* Access userData properties */}
      <div className="userInfo">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Headline:</strong> {userData.headline}</p>
            <p><strong>Phone:</strong> {userData.phoneNumber}</p>
            <p><strong>User Type:</strong> {userData.userType}</p>
            {/* Add more data as needed */}
</div>
      {/* Add more data as needed */}
    </div>
    </>
  );
};

export default ProfileSection;
