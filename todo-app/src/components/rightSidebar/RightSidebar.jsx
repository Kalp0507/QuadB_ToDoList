import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { BsBell, BsCalendar, BsTrash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import './RightSidebar.css';  // Import the styles
import { useDispatch } from 'react-redux';
import Calendar from '../calendar/Calendar'

const RightSidebar = ({ task, setShowRightSidebar }) => {
    const dispatch = useDispatch();
    const [showReminder, setShowReminder] = useState(false)

    const handleDeleteTask = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
        setShowRightSidebar(false)
    }

    const handleCompleteToggle = () => {
        dispatch({ type: 'TOGGLE_OR_UPDATE_TASK', payload: { id: task.id, isCompleted: true }, });
    };

    const handleSetImportant = () => {
        dispatch({ type: 'TOGGLE_OR_UPDATE_TASK', payload: { id: task.id, updatedFields: { isImportant: !task.isImportant } } });
    }

    return (
        <div className="right-sidebar-container">
            <div className='bgtr'>
                <div className="task-header top-border">
                    <div className="task-title">
                        <input type="checkbox" checked={task.isCompleted} onChange={handleCompleteToggle} />
                        <span>{task.text}</span>
                    </div>
                    <button className="star-btn" onClick={handleSetImportant}>
                        {task.isImportant ? <IoIosStar /> : <IoIosStarOutline />}
                    </button>
                </div>

                <div className="task-options">
                    <div className="task-option top-border">
                        <div className='inner-option-box'>
                            <FaPlus className="icon" />
                            <span>Add Step</span>
                        </div>
                    </div>
                    <div className="task-option top-border" >
                        <div className='inner-option-box' onClick={() => setShowReminder(!showReminder)}>
                            <BsBell className="icon" />
                            <span>Set Reminder</span>
                        </div>
                        {showReminder && (
                            <Calendar />
                        )}
                    </div>
                    <div className="task-option top-border">
                        <div className='inner-option-box'>
                            <BsCalendar className="icon" />
                            <span>Add Due Date</span>
                        </div>
                    </div>
                    <div className="task-option top-border">
                        <div className='inner-option-box'>
                            <FiRepeat className="icon" />
                            <span>Repeat</span>
                        </div>
                    </div>
                </div>

                <div className="task-notes top-border">
                    <textarea placeholder="Add Notes" />
                </div>
            </div>

            <div className="task-footer top-border">
                <div className="bgtr footer-item">
                    <button className='save-btn'>Save Changes</button>
                </div>
                <div className='bgtr footer-item'>
                    <button className="close-btn" onClick={() => setShowRightSidebar(false)}>×</button>
                    <span className="created-date">Created Today</span>
                    <button className="delete-btn" onClick={handleDeleteTask}>
                        <BsTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
