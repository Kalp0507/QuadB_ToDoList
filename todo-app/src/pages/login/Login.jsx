import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/authActions';
import './Login.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const authState = useSelector(state => state.auth); // Access auth state from Redux

    const handleLogin = () => {
        dispatch(login(username, password));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='login-container'>
            {authState.isAuthenticated ? (
                <div>
                    <h2>Welcome, {authState.user.username}</h2>
                    <img src={authState.user.avatar} alt="Avatar" />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    {authState.loading && <p>Loading...</p>}
                    {authState.error && <p style={{ color: 'red' }}>{authState.error}</p>}
                </div>
            )}
        </div>
    );
};

export default LoginPage;
