import { combineReducers } from 'redux';
import taskReducer from './taskReducer';  // Task-related reducer
import authReducer from './authReducer';  // Authentication-related reducer

// Combine all the reducers
const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer, // Add the authReducer here
    // Add more reducers as needed
});

export default rootReducer;
