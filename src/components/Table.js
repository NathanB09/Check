import React, { Component } from 'react';
import { cards } from '../card-data'
import './Table.css'
import Card from './Card';
import Results from './Results';

class Table extends Component {

  state = {
    players: '2',
    user_id: null,
    com_cards: [],
    player_cards: [],
    player: false,
    odds: {
      win: null,
      lose: null,
      tie: null
    }
  }

  cardIsInEitherPlay = card =>
    this.state.player_cards.includes(card) || this.state.com_cards.includes(card)

  addCard = card => {
    const { player_cards } = this.state
    const { com_cards } = this.state
    const { cardIsInEitherPlay } = this

    if (this.state.player) {
      if (player_cards.length >= 2 || cardIsInEitherPlay(card)) return
      this.setState({ player_cards: [...player_cards, card] })
    } else {
      if (com_cards.length >= 5 || cardIsInEitherPlay(card)) return
      this.setState({ com_cards: [...com_cards, card] })
    }
  }

  removePlayerCard = card => {
    const removeCard = this.state.player_cards.find(stateCard => stateCard === card)
    const cards = [...this.state.player_cards]
    const index = cards.indexOf(removeCard)
    cards.splice(index, 1)
    this.setState({ player_cards: cards })
  }

  removeComCard = card => {
    const removeCard = this.state.com_cards.find(stateCard => stateCard === card)
    const cards = [...this.state.com_cards]
    const index = cards.indexOf(removeCard)
    cards.splice(index, 1)
    this.setState({ com_cards: cards })
  }

  switchTablePlayer = () => {
    this.setState({ player: !this.state.player })
  }

  handleChange = (e) => {
    this.setState({ players: e.target.value })
  }

  makeQuery = () => {
    return {
      user_id: 1,
      com_card1: this.state.com_cards[0].code,
      com_card2: this.state.com_cards[1].code,
      com_card3: this.state.com_cards[2].code,
      com_card4: this.state.com_cards[3] && this.state.com_cards[3].code,
      com_card5: this.state.com_cards[4] && this.state.com_cards[4].code,
      hand_card1: this.state.player_cards[0].code,
      hand_card2: this.state.player_cards[1].code,
      players: this.state.players
    }
  }

  sendQuery = () => {
    if (this.state.com_cards.length >= 3 && this.state.player_cards.length === 2) {
      fetch('http://10.218.3.66:3000/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.makeQuery())
      }).then(resp => resp.json()).then(data => this.setState({ odds: data }))
    } else {
      alert('Minimum of 3 table cards and 2 hand cards are required for a query')
    }
  }

  newQuery = () => {
    this.setState({
      players: '2',
      user_id: null,
      com_cards: [],
      player_cards: [],
      player: false,
      odds: {
        win: null,
        lose: null,
        tie: null
      }
    })
  }

  render() {
    return (
      <div>
        <div className="selection_container">
          {cards.map(card => <Card key={card.code} card={card} handleCardInteract={this.addCard} childClass={'small_card'} />)}
        </div>

        <div className="cards_container">
          <div className="communal_container">
            {this.state.com_cards.map(card => <Card key={card.code} card={card} handleCardInteract={this.removeComCard} childClass={'large_card'} />)}
          </div>
          <div className="button_container">
            <button onClick={this.switchTablePlayer}>Switch</button>
            <p>{this.state.player ? 'Add to hand' : 'Add to table'}</p>
          </div>
          <div className="hand_container">
            {this.state.player_cards.map(card => <Card key={card.code} card={card} handleCardInteract={this.removePlayerCard} childClass={'large_card'} />)}
          </div>
        </div>

        <Results odds={this.state.odds} handleChange={this.handleChange} handleSubmit={this.sendQuery} newQuery={this.newQuery} />

      </div>
    );
  }
}

export default Table;