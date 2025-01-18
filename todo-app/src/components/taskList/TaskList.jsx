import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../taskItem/TaskItem';
import './TaskList.css';  // CSS specific to this component

const TaskList = ({ setShowRightSidebar, setClickedTask }) => {
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks.tasks)

    return (
        <div className="task-list">
            {tasks.tasks.length > 0 ? (
                tasks.tasks.map((task,index) => (
                    <TaskItem key={index} task={task} setShowRightSidebar={setShowRightSidebar} setClickedTask={setClickedTask}/>
                ))
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
};

export default TaskList;
