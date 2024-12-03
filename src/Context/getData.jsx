import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [contactData, setContactData] = useState();
  const [applicationsData, setApplicationsData] = useState();
  const [isApplication, setIsApplication] = useState(true)
  useEffect(()=>{
    getApplicationsData()
  },[]);
  const getContactData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/contact-us')
    .then((res)=> {
      setApplicationsData(res.data);
      // console.log(res.data);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  const getApplicationsData = async () => {
    await axios.get('https://al-arqam-banckend.vercel.app/api/users-application')
    .then((res)=> {
      setApplicationsData(res.data);
      // console.log(res.data);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };
  return (
    <AppContext.Provider value={{getApplicationsData, getContactData, applicationsData, isApplication, setIsApplication }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };