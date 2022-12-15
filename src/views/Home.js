import React from 'react'
import {COLORS} from '../utils/utils'

export const Home = (props) => {
  return (
    <div className='container mt-5 ms-5 border-top border-bottom border-4'>
      <h1 className='display-1' style={{'color': COLORS.primaryColor, 'font-family': 'Montserrat, sans-serif'}}>BEDU</h1>
      <h3 className='display-5' style={{'color': COLORS.secondaryColor, 'font-family': 'Montserrat, sans-serif'}}>Proyecto Final FrontEnd</h3>
      <div>
        <p style={{'color': COLORS.primaryColor}}>En este proyecto estamos simulando un sistema escolar en el cual vamos a poder realizar:<br/>
          <ul>
            <li>Ingresar nuevos alumnos</li>
            <li>Ingresar nuevos empleados</li>
            <li>Ingresar asistencias de alumnos y empleados</li>
            <li>Asignar grupo a algun alumno</li>
          </ul>
        </p>Este proyecto se hizo pensando aveces en lo dificil que es llevar el control de maestros, alumnos, personal administrativo, etc.<br/>
            Ahi fue que nos llego a la mente la oportunidad de facilitar esto a traves de un sistema que sea funcional y a la vez, sea amigable con el usuario.
        <p>
        </p>
      </div>
    </div>
  )
}

export default Home