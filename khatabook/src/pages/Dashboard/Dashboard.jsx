import React from 'react'
import SideBar from '../../containers/SideBar'
import { Outlet } from 'react-router-dom'
 
 
 

const Dashboard = () => {
  return (
    <>
    <SideBar/>
   <div className='mainbar'  >
   
    <Outlet />
   </div> 
    </>
  )
}

export default Dashboard
