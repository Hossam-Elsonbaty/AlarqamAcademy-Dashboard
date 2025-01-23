import React,{useState, useContext} from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {AppContext} from '../Context/getData'
export const Login = () => {
  const token = localStorage.getItem('token');
  const {getStudentApplicationsData,openNotificationWithIcon,contextHolder} = useContext(AppContext)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    //https://al-arqam-banckend.vercel.app/api/login
    try {
      const response = await fetch('http://localhost:5555/api/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Login successful');
        getStudentApplicationsData()
        navigate("/", { replace: true });
      } else {
        console.log(data.message || 'Login failed');
        openNotificationWithIcon('error', 'Failed Operation', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      openNotificationWithIcon('error', 'Failed Operation', 'Invalid username or password');
    }
  };
  return (
    <>
      {contextHolder}
      <main className='login'>
        <div className="form-cont">
          <h1>Please enter your login data</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="text" placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>
              Login
              <AiOutlineLogin />
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
