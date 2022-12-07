import React, { useState } from 'react'
import { COLORS, CONSTANTS } from '../utils/utils';
import RegisterAttendance from '../components/RegisterAttendance';
import { WatchAttendances } from '../components/WatchAttendances';

export const AttendanceView = (props) => {
  const [changeView, setChangeView] = useState(true);

  const handleSubMenu = (opt) => {
    if(opt === CONSTANTS.REGISTER){
      setChangeView(true);
    }else{
      setChangeView(false);
    }
  }

  return (
    <div className='container-fluid'>
      <h1 className='mt-3 ms-3'>AttendanceView</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${changeView && 'active'}`} aria-current="page" style={{'color': `${COLORS.lightPrimaryColor}`}} onClick={() => handleSubMenu(CONSTANTS.REGISTER)}>Registrar Asistencia</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${changeView || 'active'}`} style={{'color': `${COLORS.lightPrimaryColor}`}}  onClick={() => handleSubMenu(CONSTANTS.WATCH)}>Ver asistencias</button>
        </li>
      </ul>

      <div className='container float-start'>
        {
          changeView ? <RegisterAttendance/> : <WatchAttendances />
        }
      </div>
    </div>
  )
}

export default AttendanceView