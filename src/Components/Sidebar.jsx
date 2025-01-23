import React, { useState, useContext } from 'react';
import logo from '../Images/PNG Blue Horizontal.webp';
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import {AppContext} from '../Context/getData';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
export const Sidebar = () => {
  const navigate = useNavigate();
  const {setIsApplication, getContactData,getParentApplicationsData, getStudentApplicationsData, getUsersData, getDonationsData, setIsParent} = useContext(AppContext);
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
    setIsParent(false);
  }
  const handleUsersData = ()=> {
    setIsApplication("users");
    getUsersData();
    setIsParent(false);
  }
  const handleDonationData = (type)=> {
    setIsApplication("donations");
    type === 'one-time'?
    getDonationsData(true)
    :
    getDonationsData(false);
    setIsParent(false);
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = `${window.location.origin}/login`
  };
  const items = [
    {
      key: 'sub1',
      label: 'Applications',
      icon: <BsClipboardData />,
      children: [
        {
          key: '1',
          label: 'Students',
          onClick	:handleStudentApplicationsData
        },
        {
          key: '2',
          label: 'Parents',
          onClick	:handleParentApplicationsData
        }
      ],
    },
    {
      key: 'sub2',
      label: 'Donations',
      icon: <BiDonateHeart />,
      children: [
        {
          key: '3',
          label: 'One-Time',
          onClick	:()=> handleDonationData('one-time')
        },
        {
          key: '4',
          label: 'Monthly',
          onClick	:()=> handleDonationData('monthly')
        }
      ],
    },
    {
      key: '5',
      icon: <MailOutlined />,
      label: 'Incoming Emails',
      onClick	:handleContactData
    },
    {
      key: '6',
      icon: <IoSettingsOutline />,
      label: 'Settings',
      onClick	:handleUsersData
    },
    {
      key: '7',
      icon: <MdLogout />,
      label: 'Log Out',
      onClick	:handleLogout
    },
  ];
  const [openKeys, setOpenKeys] = useState(['sub1']); // Default open submenu
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (latestOpenKey) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys([]);
    }
  };
  return (
    <div className='sidenav'>
      <div className='logo-holder'>
        <img src={logo} alt="logo" />
        <span>Alarqam Academy</span>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
