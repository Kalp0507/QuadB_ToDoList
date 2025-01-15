const initialState = {
    tasks: [],
    taskProgress: {
        completed: 0,
        incomplete: 0,
    },
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "TOGGLE_TASK":
            const updatedTasks = state.tasks.map((task) =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
            const completedTasks = updatedTasks.filter(
                (task) => task.completed
            ).length;
            return {
                ...state,
                tasks: updatedTasks,
                taskProgress: {
                    completed: completedTasks,
                    incomplete: updatedTasks.length - completedTasks,
                },
            };
        default:
            return state;
    }
};

export default taskReducer;
