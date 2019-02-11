import React from 'react';
import './Title.css'

const Title = () => {
  return (
    <div className='title_wrapper'>
      <img src={'./assets/cards-logo.png'} alt='cards logo' />
      <div className='title'>
        <h1>Check</h1>
        <p>Poker Odds Generator</p>
      </div>
    </div>
  );
};

export default Title;