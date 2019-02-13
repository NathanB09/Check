import React from 'react';
import Nav from './Nav';
import API from '../API';
import './History.css'

class History extends React.Component {

  state = {
    lastFive: []
  }

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push('/')
    } else {
      API.getUserQueries()
        .then(data => this.setState({ lastFive: data.slice(-5).reverse() }))
    }
  }

  render() {
    console.log(this.state.lastFive)
    return (
      <div>
        <Nav page={'Table'} logout={this.props.logout} username={this.props.username} />
        <h3 className="history_page_header" >You Last 5 Queries:</h3>
        {this.state.lastFive.map(query => {
          const date = query.created_at.substring(0, query.created_at.length - 8).replace("T", " - ")
          return <div key={query.id} className="history_row">
            <p> Sent: {date}</p>
            <div className="history_com_cards">
              <p> Table Cards: </p>
              <img className="history_card" src={`/assets/cards/${query.com_card1}.png`} alt={query.com_card1} />
              <img className="history_card" src={`/assets/cards/${query.com_card2}.png`} alt={query.com_card2} />
              <img className="history_card" src={`/assets/cards/${query.com_card3}.png`} alt={query.com_card3} />
              {query.com_card4 && <img className="history_card" src={`/assets/cards/${query.com_card4}.png`} alt={query.com_card4} />}
              {query.com_card5 && <img className="history_card" src={`/assets/cards/${query.com_card5}.png`} alt={query.com_card5} />}
            </div>
            <div className="history_player_cards">
              <p> Hand Cards: </p>
              <img className="history_card" src={`/assets/cards/${query.hand_card1}.png`} alt={query.hand_card1} />
              <img className="history_card" src={`/assets/cards/${query.hand_card2}.png`} alt={query.hand_card2} />
            </div>
            <div className="history_query_details">
              <p>Players: {query.players}</p>
              <p>Win: {Math.round(query.odd.win * 100)}% </p>
              <p>Lose: {Math.round(query.odd.lose * 100)}% </p>
              <p>Tie: {Math.round(query.odd.tie * 100)}% </p>
            </div>
          </div>
        })}
      </div>
    );
  }
};

export default History;