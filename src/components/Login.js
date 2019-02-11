import React from 'react';
import Title from './Title';
import './Login.css'

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className='login_title'>
        <Title />
      </div>
      <div className='login_form'>
        <form>
          <input type="text" placeholder='Username' /><br />
          <input type="password" placeholder='Password' /><br />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;