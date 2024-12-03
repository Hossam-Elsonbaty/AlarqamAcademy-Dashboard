import React, {useContext} from 'react'
import logo from '../Images/PNG Blue Horizontal.webp';
import { MdLogout } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import {AppContext} from '../Context/getData';
export const Sidebar = () => {
  const {isApplication,setIsApplication, getContactData, getApplicationsData} = useContext(AppContext);
  const handleApplicationsData = ()=> {
    setIsApplication(true);
    getApplicationsData();
  }
  const handleContactData = ()=> {
    setIsApplication(false);
    getContactData();
    console.log("sdas");
    
  }
  return (
    <aside className='sidenav'>
      <div className='logo-holder'>
        <img src={logo} alt="logo" />
        <span>Alarqam Academy</span>
      </div>
      <div className='tabs-holder'>
        <div className='tab' onClick = {handleApplicationsData}>
          <div className="icon"><BsClipboardData /></div>
          <span className="link">Submitted Applications</span>
        </div>
        <div className='tab' onClick = {handleContactData}>
          <div className="icon"><SiAmazonsimpleemailservice /></div>
          <span className="link">Incoming Emails</span>
        </div>
        <div className='tab'>
          <div className="icon"><IoSettingsOutline /></div>
          <span className="link">Settings</span>
        </div>
      </div>
      <div className='logout'>
        <MdLogout />
        <span className="link">Log Out</span>
      </div>
    </aside>
  )
}
