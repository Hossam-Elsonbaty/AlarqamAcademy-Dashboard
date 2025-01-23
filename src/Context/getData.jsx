import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { notification } from 'antd';
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      getStudentApplicationsData();
      getStatics();
    } else {
      navigate('/login', { replace: true });
    }
  }, [token]);
  const [applicationsData, setApplicationsData] = useState();
  const [statics, setStatics] = useState();
  const [isApplication, setIsApplication] = useState("studentApplications");
  const [isParent, setIsParent] = useState(true);
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [oneTime, setOneTime] = useState(true);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description
    });
  };
  let isRedirecting = false;
  const handleUnauthorizedError = (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      if(!isRedirecting){
        isRedirecting = true;
        navigate('/login', {replace: true});
      }
    } else {
      console.log(error.message);
    }
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
  const getStatics = async ()=> {
    try {
      const res = await axios.get('http://localhost:5555/api/statics', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setStatics(res.data);
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  }
  const getContactData = async () => {
    try {
      const res = await axios.get('https://al-arqam-banckend.vercel.app/api/contact-us', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setApplicationsData(res.data);
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  };
  const getStudentApplicationsData = async () => {
    try {
      const res = await axios.get('https://al-arqam-banckend.vercel.app/api/student-application', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setApplicationsData(res.data);
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  };
  const getParentApplicationsData = async () => {
    try {
      const res = await axios.get('https://al-arqam-banckend.vercel.app/api/parent-application', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setApplicationsData(res.data);
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  };
  const getUsersData = async () => {
    try {
      const res = await axios.get('http://localhost:5555/api/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setApplicationsData(res.data);
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  };
  const getDonationsData = async (type) => {
    try {
      const res = await axios.get('http://localhost:5555/api/transactions', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if(type){
        setApplicationsData(res.data.filter(ele=>ele.customerId===undefined))
      }else{setApplicationsData(res.data.filter(ele=>ele.customerId))}
      console.log(res.data);
    } catch (err) {
      handleUnauthorizedError(err);
    }
  };
  return (
    <AppContext.Provider value={{handleClose, handleClickOpen,
      handleClickOpenEmail,handleCloseEmail,statics,
      getParentApplicationsData, getStudentApplicationsData, getDonationsData,
      getContactData, getUsersData,applicationsData,oneTime, setOneTime,
      isApplication, open, openEmail, contextHolder, openNotificationWithIcon , setIsApplication, setIsParent, isParent }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };