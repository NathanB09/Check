import React from 'react'

const Card = ({ card, handleCardInteract, childClass }) =>
  <img src={`/assets/cards/${card.code}.png`} alt={card.name} className={childClass} onClick={() => handleCardInteract(card)} />

export default Card