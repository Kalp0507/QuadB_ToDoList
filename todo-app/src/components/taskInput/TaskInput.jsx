import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TaskInput.css';  // CSS specific to this component

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Low');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch({ type: 'ADD_TASK', payload: { task, priority } });
            setTask('');  // Clear the input field
        }
    };

    return (
        <div className="task-input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add Task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskInput;
