export const login = (username, password) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_REQUEST' });

        // Simulate an API call for authentication
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                const user = {
                    username: 'admin',
                    avatar: '/assets/profile.png',
                };
                dispatch({ type: 'LOGIN_SUCCESS', payload: user });
            } else {
                dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
            }
        }, 1000);
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT' });
    };
};
