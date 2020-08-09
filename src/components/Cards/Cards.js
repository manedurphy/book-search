import React from 'react';
import DealersCards from '../Card/DealersCards';
import PlayersCards from '../Card/PlayersCards';
import PlayingCards from '../Card/PlayingCards';

const Cards = ({ dealer, player, playing }) => {
  return (
    <>
      <div className="dealer">
        {dealer.map((card) => (
          <DealersCards key={card.id} {...card} />
        ))}
      </div>
      <div className="playing">
        {playing.map((card) => (
          <PlayingCards key={card.id} {...card} />
        ))}
      </div>
      <div className="player">
        {player.map((card) => (
          <PlayersCards key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default Cards;
