import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { notification } from 'antd';
const AppContext = createContext();
const AppProvider = ({ children }) => {
  useEffect(()=>{
    getStudentApplicationsData()
  },[]);
  const [applicationsData, setApplicationsData] = useState();
  const [isApplication, setIsApplication] = useState("studentApplications");
  const [isParent, setIsParent] = useState(true);
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const token = localStorage.getItem('token');
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
    console.log("open");
  };
  const handleClickOpenEmail = () => {
    setOpenEmail(true);
    console.log("open-email");
  };
  const handleCloseEmail = () => {
    setOpenEmail(false);
    console.log("close-email");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getContactData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/contact-us', {
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then((res)=> {
      setApplicationsData(res.data);
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  const getStudentApplicationsData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/student-application',{
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then((res)=> {
      setApplicationsData(res.data)
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  const getParentApplicationsData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/parent-application',{
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then((res)=> {
      setApplicationsData(res.data)
      console.log(res.data);
      console.log(isParent);
      
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  const getUsersData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/users',{
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then((res)=> {
      setApplicationsData(res.data);
      // console.log(res.data);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  return (
    <AppContext.Provider value={{handleClose, handleClickOpen,
      handleClickOpenEmail,handleCloseEmail,
      getParentApplicationsData, getStudentApplicationsData,
      getContactData, getUsersData,applicationsData,
      isApplication, open, openEmail, contextHolder, openNotificationWithIcon , setIsApplication, setIsParent, isParent }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };