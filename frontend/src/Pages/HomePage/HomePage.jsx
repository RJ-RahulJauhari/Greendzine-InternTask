import React, { useContext, useEffect, useState } from 'react'
import '../HomePage/HomePage.scss'
import {useParams} from 'react-router-dom'
import BottomNavigationBar from '../../Components/BottomBar/BottomNavigationBar'
import ProgressBarIndicator from '../../Components/ProgressBar/ProgressBarIndicator'
import { UserContext } from '../../Context/UserContext'
import motologo from '../../assets/logos/moto-logo.png'
import supportlogo from '../../assets/icons/support-call.png'

const HomePage = () => {

  const {userData,userProductivity,getUserProductivity} = useContext(UserContext)

  const ID = useParams().id;
  console.log(ID)

  useEffect(() => {
    if(ID){
      getUserProductivity(ID);
    }else{
      getUserProductivity(userData.emp_id)
    }
  },[ID])
  

  return (
    <div className='home flex-col full-height'>
      <div className='top-nav align-end'>
        <img className='clickable' src={supportlogo} alt="support-call" />
      </div>
      <img className='moto-logo center-self pad-block' src={motologo} alt="moto-logo" />
      <div className='dashboard-banner center center-self width-8 radius-3 pad-inline'>
          <p className='dashboard-text'>Employee Productivity Dashboard</p>
      </div>
      <div className='dashboard-bg full-height mar-top-1 width-8 pad-2'>
          {
            userProductivity? userProductivity.map((item,index) => {
              return <ProgressBarIndicator key={index} title={item.title} progress={item.progress} upperLimit={100}></ProgressBarIndicator>
            })
            :
            <p className='forgot-text'>No results found for ID: {ID}</p>
          }
      </div>
      <div className='align-center'>
        <BottomNavigationBar></BottomNavigationBar>
      </div>
    </div>
  )
}

export default HomePage
