import React from 'react';
import { useDispatch } from "react-redux";
import UserProfile from '../userProfile/UserProfile';
import { LuClipboardList } from "react-icons/lu";
import { CiCalendar, CiMap } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import ProgressChart from '../chart/ProgressChart'
import { FiPlus } from "react-icons/fi";
import './Sidebar.css';

const Sidebar = () => {
    const user = { name: 'John Doe', avatar: '/assets/profile.png' };  // Mock user data
    const lists = [
        { name: 'All Tasks', icon: <LuClipboardList className='list-icons' /> },
        { name: 'Today', icon: <CiCalendar className='list-icons' />},
        { name: 'Important', icon: <FaRegStar className='list-icons' />},
        { name: 'Planned', icon: <CiMap className='list-icons' /> },
        { name: 'Assigned to me', icon: <MdOutlineAssignmentInd className='list-icons' />},
    ]
    const dispatch = useDispatch();

    const handleFilterChange = (filter) => {
        dispatch({ type: "FILTER_TASKS", payload: filter });
    };

    return (
        <div className="sidebar-container">
            <UserProfile user={user}/>
            <ul>
                {lists.map((list)=>(
                    <li key={list.name}>
                        <button onClick={() => handleFilterChange(list.name)} className='list-task'>
                            {list.icon}
                            <p>{list.name}</p>
                        </button>
                    </li>
                ))}
            </ul>

            <div className='add-list'>
                <FiPlus className='list-icons'/>
                <p>Add list</p>
            </div>

            {/* <ProgressChart/> */}
        </div>
    );
};

export default Sidebar;
