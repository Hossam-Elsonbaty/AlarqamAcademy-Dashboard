import React,{useState, useContext} from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {AppContext} from '../Context/getData'
export const Login = () => {
  const {getStudentApplicationsData,openNotificationWithIcon,contextHolder} = useContext(AppContext)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5555/api/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('al-arqam-academy-chicago_authToken', data.token);
        getStudentApplicationsData()
        navigate("/", { replace: true });
      } else {
        openNotificationWithIcon('error', 'Failed Operation', 'Invalid username or password');
      }
    } catch (error) {
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
