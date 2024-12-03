import React from 'react';
import { AiOutlineLogin } from "react-icons/ai";
export const Login = () => {
  return (
    <main className='login'>
      <div className="form-cont">
        <h1>Please enter your login data</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password'/>
          <button>
            Login
            <AiOutlineLogin />
          </button>
        </form>
      </div>
    </main>
  )
}
