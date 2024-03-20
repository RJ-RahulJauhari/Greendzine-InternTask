import React, { useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import '../EmployeePage/EmployeePage.scss'
import { FaSearch } from "react-icons/fa";
import BottomNavigationBar from '../../Components/BottomBar/BottomNavigationBar';
import EmployeeCard from '../../Components/EmployeeCard/EmployeeCard';
import {UserContext} from '../../Context/UserContext';
import motologo from '../../assets/logos/moto-logo.png'
import supportlogo from '../../assets/icons/support-call.png'

const EmployeePage = () => {

  const {userData,allUsers,getUsersByName,getAllUsers} = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    // getAllUsers()
  },[])
  

  return (
    <div className='employee-page'>
      <div className='suport align-end full-width mar-bottom-2'>
        <img className='clickable' src={supportlogo} alt="suport" />
      </div>
      <div className='moto-logo flex center full-width mar-bottom-2'>
        <img src={motologo} alt="moto-logo" />
      </div>
      <div className='search-field center pad-inline'>
        <input onChange={(e) => {getUsersByName(e.target.value)}} className='full-height full-width transparent-bg mulish-bold WE-margin' placeholder='Search with name' type="text" />
        <span><FaSearch /></span>
      </div>
      <div className='employees-view mar-top-1 sp-1 flex-col center-col mar-bottom-5'>
        {
          allUsers? allUsers.map((item,index) => {
            return <EmployeeCard key={index} num={index} navigator={() => {navigate(`/employee/${item.emp_id}`)}} id={item.emp_id} name={item.name} dob={new Date(item.dob).toLocaleDateString()} role={item.role}></EmployeeCard>
          })
          :
          ""
        }
        
      </div>
      <div className='flex center full-width'>
        <BottomNavigationBar></BottomNavigationBar>
      </div>
    </div>
  )
}

export default EmployeePage
