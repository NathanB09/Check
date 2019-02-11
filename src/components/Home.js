import React from 'react';
import './Home.css'

import { Link } from 'react-router-dom'
import Title from './Title';

const Home = () => {
  return (
    <div className='home'>
      <Title />
      <div className='home_buttons'>
        <Link to='/login'><button>Login</button></Link>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Home;