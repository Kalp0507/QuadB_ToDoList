import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './App.css';  // Global styles
import TaskInput from './components/taskInput/TaskInput';
import Sidebar from './components/sidebar/Sidebar';
import TaskList from './components/taskList/TaskList';
import LoginPage from './pages/login/Login';
import RightSidebar from './components/rightSidebar/RightSidebar';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false); // State to manage right sidebar visibility
  const [mode, setMode] = useState('light');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);  // Access authentication state
  const [clickedTask,setClickedTask] = useState({})

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={`app-container ${mode === 'light' ? 'light' : 'dark'}`}>
          {/* Conditionally render the login page or the main app based on authentication */}
          {!isAuthenticated ? (
            <LoginPage />  // Render login page for unauthorized users
          ) : (
            <>
              <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} mode={mode} setMode={setMode} />
              <div className={`app ${showSidebar ? 'sidebar-open' : ''} ${showRightSidebar ? 'right-sidebar-open' : ''} bgtr`}>
                {showSidebar && (
                  <aside className="sidebar bgtr">
                    <Sidebar />
                  </aside>// Conditionally render the sidebar
                )}
                <main className="main-content bgtr">
                  <TaskInput />
                  <TaskList setShowRightSidebar={setShowRightSidebar} setClickedTask={setClickedTask}/> {/* Pass setShowRightSidebar to TaskList */}
                </main>
                {showRightSidebar && (
                  <aside className="right-sidebar bgtr">
                    <RightSidebar task={clickedTask} setShowRightSidebar={setShowRightSidebar}/>
                  </aside>
                )}
              </div>
            </>
          )}
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
