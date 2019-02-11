import React, { Component } from 'react';
import { cards } from '../Cards'

class Table extends Component {

  state = {
    query: {
      com_card1: undefined,
      com_card2: undefined,
      com_card3: undefined,
      com_card4: undefined,
      com_card5: undefined,
      hand_card1: undefined,
      hand_card2: undefined,
      players: undefined,
      user_id: 1
    },
    odds: {
      win: '--',
      lose: '--',
      tie: '--'
    }
  }

  componentDidMount() {
    this.setState({ filteredCards: cards })
  }

  render() {
    return (
      <div>
        <div className="cards_container">
          <div className="communal_container">

          </div>

          <div className="hand_container">

          </div>
        </div>

        <div className="card_selection">

        </div>

        <div className="results_container">
          <div className="odds_container">
            <h1>Odds</h1>
            <p>Win: {this.state.odds.win}</p>
            <p>Lose: {this.state.odds.lose}</p>
            <p>Tie: {this.state.odds.tie}</p>
          </div>

          <div className="submit_container">

          </div>
        </div>
      </div>
    );
  }
}

export default Table;