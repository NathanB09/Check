import React from 'react';
import './Results.css'

const range = (start, end) => {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

const Results = ({ odds, handleChange }) => {
  return (
    <div className="results_container">
      <div className="odds_container">
        <h1>Odds</h1>
        <p>Win: {odds.win}</p>
        <p>Lose: {odds.lose}</p>
        <p>Tie: {odds.tie}</p>
      </div>

      <div className="submit_container">
        <label># of Players: </label>
        <select onChange={handleChange} className="players_dropdown">
          {range(2, 10).map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button onClick={() => console.log}>Get Odds</button>
      </div>
    </div>
  );
};

export default Results;