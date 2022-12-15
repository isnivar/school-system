import React, {useContext, useState} from 'react';
// import {login} from '../../tools/request';
import { COLORS, types } from '../utils/utils';
// import { types } from '../utils/utils';
import { AuthContext } from '../auth/AuthContext';
// import { Footer } from '../../components/ui/Footer';
import { ROL } from '../utils/utils';
import logo from '../assets/logo.png';
import { login } from '../utils/requests';

const Login = ({history}) => {

    const [value, setValue] = useState({
        username: '',
        pass:'',
        level: 'rol',
        hasAuth: true,
    });

    const {dispatch} = useContext(AuthContext);
    // const lastPath = localStorage.getItem('lastPath' || '/');

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.username.trim().length > 2 || value.pass.trim().length > 2){
            if(value.level === 'rol'){
                alert('Usted no ha seleccionado su rol');
            }else{
                login(value.username, value.pass, value.level).then((val)=>{
                    if(val != null){
                        dispatch({
                            type: types.login,
                            payload:{
                                id: val.id,
                                name: val.name
                            }
                        });
                    }else{
                        setValue({
                            ...value,
                            hasAuth: false
                        })
                    }
                });
            }
        }
    }

    return (
        <>
            <div className="container-fluid bg-dark p-3" style={{'height': '1000px'}}>
                <div className="ms-5 mt-5 mb-4 ps-5">
                    <img src={logo} className="img-fluid img-thumbnail" alt="BEDU" style={{'width': '400px'}}/>
                </div>
                <div className="float-end me-5 mt-5 p-3 border" style={{width: '30rem'}}>
                    <div className="fluid-container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" style={{color: COLORS.secondaryColor, fontSize: '20px'}}>Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    autoComplete="off"
                                    value={value.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{color: COLORS.secondaryColor, fontSize: '20px'}}>Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="pass"
                                    id="inputPass"
                                    value={value.pass}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <select className="form-select" name="level" onChange={handleChange}>
                                    <option
                                        defaultValue key="rol"
                                        value="rol"
                                    >
                                            Seleccione su rol
                                    </option>
                                    <option
                                        key={ROL.director.name}
                                        value={ROL.director.type}
                                    >
                                        Director
                                    </option>
                                    <option
                                        key={ROL.administrador.name}
                                        value={ROL.administrador.type}
                                    >
                                        Administrativo
                                    </option>
                                    <option
                                        key={ROL.maestro.name}
                                        value={ROL.maestro.type}
                                    >
                                        Maestro
                                    </option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn"
                                style={{'backgroundColor': COLORS.secondaryColor, 'color': 'white'}}
                            >
                                Ingresar
                            </button>
                        </form>
                    </div>
                    {
                        value.hasAuth ||
                        <div className="alert alert-danger mt-3" role="alert">
                            Usuario o Contraseña incorrectos favor de validar.
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Login;