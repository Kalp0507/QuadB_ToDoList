import React from "react";
import "./UserProfile.css"; // CSS specific to this component

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <img src={user.avatar} alt="User Avatar" className="profile-picture" />
            <p>Hey, {user.name}</p>
        </div>
    );
};

export default UserProfile;
