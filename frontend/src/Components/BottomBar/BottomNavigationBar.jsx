import React from 'react'
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import '../BottomBar/BottomNavigationBar.scss'
import { Link } from 'react-router-dom';


const BottomNavigationBar = () => {
    const size = 25;
  return (
    <div className='bar full-width sp-1 flex-row'>
      <Link className='block flex center' to='/home'>
            <ImHome className='icon full-width height-7' color='white' size={size} />
      </Link>
      <Link className='block flex center' to='/employee'>
            <FaUser className='icon full-width height-7' color='white' size={size} />
      </Link>
    </div>
  )
}

export default BottomNavigationBar
