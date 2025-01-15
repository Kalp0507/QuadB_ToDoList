import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../taskItem/TaskItem';
import './TaskList.css';  // CSS specific to this component

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div className="task-list">
            {tasks.length > 0 ?
                (tasks.map((task) => <TaskItem key={task.id} task={task} />)) :
                (<p>No tasks available.</p>)}
        </div>
    );
};

export default TaskList;