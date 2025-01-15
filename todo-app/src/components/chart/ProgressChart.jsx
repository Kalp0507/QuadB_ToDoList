import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './ProgressChart.css';  // CSS specific to this component

const ProgressChart = () => {
    const { tasks, taskProgress } = useSelector((state) => state.tasks);

    const data = {
        labels: ['Completed', 'Incomplete'],
        datasets: [
            {
                data: [taskProgress.completed, taskProgress.incomplete],
                backgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    return (
        <div className="progress-chart">
            <Pie data={data} />
        </div>
    );
};

export default ProgressChart;
