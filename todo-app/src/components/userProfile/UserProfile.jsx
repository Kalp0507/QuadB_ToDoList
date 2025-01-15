import React from "react";
import { useDispatch } from "react-redux";
import "./UserProfile.css"; // CSS specific to this component

const UserProfile = ({ user }) => {
    const dispatch = useDispatch();

    const handleFilterChange = (filter) => {
        dispatch({ type: "FILTER_TASKS", payload: filter });
    };

    return (
        <div className="user-profile">
            <img src={user.avatar} alt="User Avatar" className="profile-picture" />
            <h3>{user.name}</h3>
            <ul className="task-filters">
                <li onClick={() => handleFilterChange("Personal")}>Personal</li>
                <li onClick={() => handleFilterChange("Work")}>Work</li>
                <li onClick={() => handleFilterChange("All")}>All Tasks</li>
            </ul>
        </div>
    );
};

export default UserProfile;
