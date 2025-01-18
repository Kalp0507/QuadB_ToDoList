import React from 'react';
import { useDispatch } from 'react-redux';
import './TaskItem.css';  // CSS specific to this component
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const TaskItem = ({ task, setShowRightSidebar, setClickedTask }) => {
    const dispatch = useDispatch();

    const handleCompleteToggle = () => {
        dispatch({ type: 'TOGGLE_OR_UPDATE_TASK', payload: { id: task.id, isCompleted: true }, });
    };

    const handleSetImportant = () => {
        dispatch({ type: 'TOGGLE_OR_UPDATE_TASK', payload: { id: task.id, updatedFields: { isImportant: !task.isImportant } } });
    }

    return (
        <div className={`task-item ${task.isCompleted ? 'completed' : ''}`} >
            <div className="task-left" onClick={() => {
                setClickedTask(task)
                setShowRightSidebar(true)
            }}>
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={handleCompleteToggle}
                    className="task-checkbox"
                />
                <span className={`task-text ${task.completed ? 'completed-text' : ''}`}>
                    {task.text}
                </span>
            </div>
            <div className="task-right">
                <button className="imp-btn" onClick={handleSetImportant}>
                    {task.isImportant ? <IoIosStar /> : <IoIosStarOutline />}
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
