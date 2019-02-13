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
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Home;