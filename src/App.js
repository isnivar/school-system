import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { AuthReducer } from './auth/AuthReducer';
import { AppRouter } from './routers/AppRouter'


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false};
}

const App = () => {
    
    const [user, dispatch] = useReducer(AuthReducer, {}, init)
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default App;