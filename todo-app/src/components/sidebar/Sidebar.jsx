import React from 'react';
import Calendar from 'react-calendar';
import './Sidebar.css';  // CSS specific to this component

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Calendar</h3>
            <Calendar />
            {/* Additional widgets can go here */}
        </div>
    );
};

export default Sidebar;
