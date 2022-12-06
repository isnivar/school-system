import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import Login from '../views/Login';
import Home from '../views/Home';
import Students from '../views/Students';
import Employees from '../views/Employees';
import Attendance from '../views/Attendance';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <Routes> 
                <Route element={<PrivateRoutes isAuthenticated={user.logged}/>}>
                    <Route path="/" element={<Home />}/>
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="/employees" element={<Employees />}/>
                    <Route exact path="/students" element={<Students />}/>
                    <Route exact path="/Attendance" element={<Attendance />}/>
                </Route>
                <Route exact path= "/login" element={!user.logged ? <Login /> : <Navigate to='/'/>} />
                <Route exact path="/404" element={<h1>404 Route Not Found</h1>}/>
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </Router>
    )
}