import React from 'react';
import './Results.css'

const range = (start, end) => {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

const Results = ({ odds, handleChange, handleSubmit, newQuery }) => {
  return (
    <div className="results_container">
      <div className="odds_container">
        <h1>Odds</h1>
        <p>Win: {odds.win || odds.win === 0 ? `${Math.round(odds.win * 100)} %` : '--'}</p>
        <p>Lose: {odds.lose || odds.lose === 0 ? `${Math.round(odds.lose * 100)} %` : '--'}</p>
        <p>Tie: {odds.tie || odds.tie === 0 ? `${Math.round(odds.tie * 100)} %` : '--'}</p>
      </div>

      <div className="submit_container">
        <label># of Players: </label>
        <select onChange={handleChange} className="players_dropdown">
          {range(2, 10).map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button onClick={handleSubmit}>Get Odds</button>
        <button onClick={newQuery}>Clear Table</button>
      </div>
    </div>
  );
};

export default Results;