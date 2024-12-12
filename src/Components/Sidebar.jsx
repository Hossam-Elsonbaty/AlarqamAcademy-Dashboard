import React, {useContext} from 'react'
import logo from '../Images/PNG Blue Horizontal.webp';
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import {AppContext} from '../Context/getData';
export const Sidebar = () => {
  const navigate = useNavigate();
  const {setIsApplication, getContactData, getParentApplicationsData, getStudentApplicationsData, getUsersData, setIsParent, isApplication} = useContext(AppContext);
  const handleParentApplicationsData = ()=> {
    setIsApplication("parentApplications");
    getParentApplicationsData();
    setIsParent(true)
  }
  const handleStudentApplicationsData = ()=> {
    setIsApplication("studentApplications");
    getStudentApplicationsData();
    setIsParent(false);
  }
  const handleContactData = ()=> {
    setIsApplication("contactUs");
    getContactData();
  }
  const handleUsersData = ()=> {
    setIsApplication("users");
    getUsersData();
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Logged out successfully');
    navigate('/login')
  };
  return (
    <aside className='sidenav' >
      <div className='logo-holder'>
        <img src={logo} alt="logo" />
        <span>Alarqam Academy</span>
      </div>
      <div className='tabs-holder'>
        <div className={isApplication === 'studentApplications' ? 'tab active': 'tab'} onClick = {handleStudentApplicationsData}>
          <div className="icon"><BsClipboardData /></div>
          <span className="link">Student Applications</span>
        </div>
        <div className={isApplication === 'parentApplications' ? 'tab active': 'tab'} onClick = {handleParentApplicationsData}>
          <div className="icon"><BsClipboardData /></div>
          <span className="link">Parent Applications</span>
        </div>
        <div className={isApplication === 'contactUs' ? 'tab active': 'tab'} onClick = {handleContactData}>
          <div className="icon"><SiAmazonsimpleemailservice /></div>
          <span className="link">Incoming Emails</span>
        </div>
        <div className={isApplication === 'users' ? 'tab active': 'tab'} onClick = {handleUsersData}>
          <div className="icon"><IoSettingsOutline /></div>
          <span className="link">Settings</span>
        </div>
      </div>
      <div className='logout' onClick={handleLogout}>
        <MdLogout />
        <span className="link">Log Out</span>
      </div>
    </aside>
  )
}
