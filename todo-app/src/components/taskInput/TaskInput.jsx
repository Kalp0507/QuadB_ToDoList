import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TaskInput.css';  // CSS specific to this component
import { FaRegBell } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";

const TaskInput = () => {

    const [task, setTask] = useState({
        text: '',
        isCompleted: false,
        reminderOn: '',
        isImportant: false,
        dueDate: '',
        repeat: false,
        note: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch({
                type: 'ADD_TASK',
                payload: task,
            });

            setTask({
                text: '',
                isCompleted: false,
                reminderOn: '',
                isImportant: false,
                dueDate: '',
                repeat: false,
                note: ''
            });  // Clear the input field
        }
    };

    return (
        <div className="task-input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add A Task"
                    value={task.text}
                    onChange={(e) => setTask((prevtask)=>({...prevtask,text : e.target.value}))}
                    className="task-input-field"  // Added for cleaner CSS targeting
                />
                <div className='form-bottom'>
                    <div className="icons">
                        <FaRegBell />
                        <FiRepeat />
                        <MdOutlineCalendarToday />
                    </div>
                    <button type="submit" className="add-task-button">ADD TASK</button>
                </div>
            </form>
        </div>
    );
};

export default TaskInput;
