import React from 'react'
import '../EmployeeCard/EmployeeCard.scss'

const EmployeeCard = ({id,name,dob,role, navigator,num}) => {
  return (
    <div onClick={navigator} className='employee-card clickable pad-2 flex-row'>
        <div className='emp-details flex4 flex-col'>
            <p className='mulish-regular'>Emp ID : <span>{id}</span></p>
            <p className='mulish-regular'>Name : <span>{name}</span></p>
            <p className='mulish-regular'>DOB : <span>{dob}</span></p>
            <p className='mulish-regular'>Role : <span className='forgot-text'>{role}</span></p>
        </div>
        <div className='flex1 align-end'>
            <p className='emp-id flex center'>{num}</p>
        </div>
    </div>
  )
}


export default EmployeeCard
