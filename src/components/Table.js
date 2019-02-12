import React, { Component } from 'react';
import { cards } from '../card-data'
import './Table.css'
import Card from './Card';

class Table extends Component {

  state = {
    players: 2,
    user_id: null,
    com_cards: [],
    player_cards: [],
    player: false,
    odds: {
      win: '--',
      lose: '--',
      tie: '--'
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