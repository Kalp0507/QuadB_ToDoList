import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './App.css';  // Global styles
import UserProfile from './components/userProfile/UserProfile';
import TaskInput from './components/taskInput/TaskInput';
import ProgressChart from './components/chart/ProgressChart';
import Sidebar from './components/sidebar/Sidebar';
import TaskList from './components/taskList/TaskList';
import LoginPage from './pages/login/Login'

const App = () => {
  const user = { name: 'John Doe', avatar: '/assets/profile.png' };  // Mock user data
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);  // Access authentication state

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-container">
          {/* Conditionally render the login page or the main app based on authentication */}
          {!isAuthenticated ? (
            <LoginPage />  // Render login page for unauthorized users
          ) : (
            <>
              <div className="left-sidebar">
                <UserProfile user={user} />
                {/* <ProgressChart /> */}
              </div>

              <div className="task-container">
                <TaskInput />
                <TaskList />
              </div>

              <div className="right-sidebar">
                <Sidebar />
              </div>
            </>
          )}
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
