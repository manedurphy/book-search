import React, { Fragment } from 'react';
import DealersCards from '../Card/DealersCards';
import PlayersCards from '../Card/PlayersCards';
import PlayingCards from '../Card/PlayingCards';
import cardBack from '../../assets/cardBack.png';

const Cards = ({ dealer, player, playing, first, final, showDealer }) => {
  return (
    <Fragment>
      <div className="dealer">
        {dealer.map((card) => (
          <DealersCards key={card.id} {...card} showDealer={showDealer} />
        ))}
      </div>
      <div className="playing">
        <>
          <PlayingCards {...playing[0]} first={first} />
          <PlayingCards {...playing[1]} first={first} />
          <PlayingCards {...playing[2]} first={first} />

          {final ? (
            <>
              <PlayingCards {...playing[3]} first={first} />
              <PlayingCards {...playing[4]} first={first} />
            </>
          ) : (
            <>
              <img src={cardBack} alt="card-back" />
              <img src={cardBack} alt="card-back" />
            </>
          )}
        </>
      </div>
      <div className="player">
        {player.map((card) => (
          <PlayersCards key={card.id} {...card} />
        ))}
      </div>
    </Fragment>
  );
};

export default Cards;
