import React from 'react';
import { useDispatch } from 'react-redux';
import './TaskItem.css';  // CSS specific to this component

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleCompleteToggle = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCompleteToggle}
            />
            <span>{task.text}</span>
            <span className="priority">{task.priority}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
