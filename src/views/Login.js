import React, {useContext, useState} from 'react';
// import {login} from '../../tools/request';
import { COLORS, types } from '../utils/utils';
// import { types } from '../utils/utils';
import { AuthContext } from '../auth/AuthContext';
// import { Footer } from '../../components/ui/Footer';
import { ROL } from '../utils/utils';

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
                console.log("logged");
                // login(value.username, value.pass, value.level).then((val)=>{
                //     if(val != null){
                //         dispatch({
                //             type: types.login,
                //             payload:{
                //                 id: val.id,
                //                 name: val.name,
                //                 lastF: val.lastF
                //             }
                //         });
                //         history.replace(lastPath);
                //     }else{
                //         setValue({
                //             ...value,
                //             hasAuth: false
                //         })
                //     }
                // });
                if(value.username === 'isnivar' && value.pass === '123'){
                    dispatch({
                        type: types.login,
                        payload:{
                            id:123,
                            name: 'Israel',
                            lastF: 'Vallejo'
                        }
                    });
                }else{
                    setValue({
                        ...value,
                        hasAuth: false
                    })
                }
            }
        }
    }

    return (
        <>
            <div className="container-xxl">
                <div className="float-end me-5 mt-5" style={{width: '30rem'}}>
                    <div className="fluid-container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" style={{color: COLORS.primaryColor, fontSize: '20px'}}>Usuario</label>
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
                                <label className="form-label" style={{color: COLORS.primaryColor, fontSize: '20px'}}>Contraseña</label>
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
                                        key={ROL.admin.name}
                                        value={ROL.admin.type}
                                    >
                                        Director
                                    </option>
                                    <option 
                                        key={ROL.admon.name} 
                                        value={ROL.admon.type}
                                    >
                                        Administrativo
                                    </option>
                                </select>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
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
            {/* <div className="fixed-bottom w-75">
                <Footer />
            </div> */}
        </>
    )
}

export default Login;