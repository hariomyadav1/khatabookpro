import React from 'react'
import {Link } from 'react-router-dom'


const SideBar = () => {
  return (
   < >
   <section className="sidebar">
  <div className="header">
    <img src="/assets/img/logo.svg" />
  </div>
  <div className="profile-wrapper">
    <div className="profile">
      <div className="avatar">
        <div className="avatar-logo">D</div>
      </div>
      <div className="details">
        <div className="username">Demo User</div>
        <div className="userid">123456</div>
      </div>
      <div className="dropy">
        <img src="/assets/img/dropdown.svg" />
      </div>
    </div>
  </div>
  <div className="parties ">
    <div> parties</div>
  </div>
  <div className="customers-wrapper">
    <div className="customer-logo">
      <div>
      <img src="/assets/img/customer.svg" alt="svg" /> 
      </div>
      <div className="customer">  
      <Link to="/Customer"> Customer</Link> 
      </div>
    </div> 
  </div>
  <div className="others">
    <div>others</div>
  </div>
  <div className="reports-wrapper">
    <div>
      <img src="/assets/img/reports.svg" alt="svg" />
    </div>
    <div className="reports">
    <Link to="/Reports">Reports</Link>{" "}
    </div>
  </div>
  <div className="settings-wrapper">
    <div>
      <img src="/assets/img/settings.svg" alt="svg" />
    </div>
    <div className="settings">
      <Link to="/Settings">settings</Link>
    </div>
  </div>
  <div className="support">
    <div>
      <button className="supportbutton" tabIndex={0} type="button">
        Support{" "}
        <span>
          <img src="/assets/img/support.svg" alt="" />
        </span>
      </button>
    </div>
  </div>
</section>
 

   </>
  )
}

export default SideBar
