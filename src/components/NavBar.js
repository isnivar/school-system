import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { COLORS } from '../utils/utils';
import { types } from '../utils/utils';


export const NavBar = () => {

    // const {user:{id, name, lastF}} = useContext(AuthContext);

    const { dispatch }= useContext(AuthContext);

    const handleLogOut = () => {
        dispatch({
            type: types.logout
        });
    }

    return (
        <nav 
            className="navbar navbar-expand bg-light"
        >

            <div className="navbar-collapse container-fluid">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link"
                        style={{fontSize: '1rem', color: COLORS.primaryColor}}
                        exact
                        to="/home"
                    >
                        Asistencias
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        style={{fontSize: '1rem', color: COLORS.primaryColor}}
                        exact
                        to="/employees"
                    >
                        Empleados
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        style={{fontSize: '1rem', color: COLORS.primaryColor}}
                        exact
                        to="/students"
                    >
                        Alumnos
                    </NavLink>
                </div>
            </div>

            <div className="d-flex">
                <ul className="navbar-nav me-2">
                    <button 
                        className="nav-item nav-link btn text-nowrap"
                        style={{fontSize: '1rem', color: COLORS.primaryColor}}
                        onClick={ handleLogOut }
                    >
                        <span className="p-1">
                            Cerrar Sesión
                        </span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}