const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Load tasks from localStorage if available
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        ...action.payload,
                        id: Date.now(),
                        isCompleted: false,
                        // Default properties
                        reminderOn: action.payload.reminderOn || null,
                        isImportant: action.payload.isImportant || false,
                        dueDate: action.payload.dueDate || null,
                        repeat: action.payload.repeat || false,
                        note: action.payload.note || '',
                    },
                ],
            };

        // Handle both toggle complete and update in a single action
        case 'TOGGLE_OR_UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            // If the action has isCompleted, toggle it, otherwise spread all other updated fields
                            isCompleted: action.payload.hasOwnProperty('isCompleted')
                                ? !task.isCompleted
                                : task.isCompleted,
                            ...action.payload.updatedFields, // Update other fields dynamically
                        };
                    }
                    return task;
                }),
            };

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        default:
            return state;
    }
};

export default taskReducer;
