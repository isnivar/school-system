import React, { useEffect, useState } from 'react'
import { SelectGroups } from './SelectGroups';

const RegisterAttendance = () => {
  
  const [students, setStudents] = useState([])
  const [group, setGroup] = useState('')

  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <select className='form-select form-select-sm m-3' style={{"width": "100px"}}>
          <SelectGroups />
      </select>
      
    </>
  )
}

export default RegisterAttendance;
