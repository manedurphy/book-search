import React, { Fragment } from 'react';
import DealersCards from '../Card/DealersCards';
import PlayersCards from '../Card/PlayersCards';
import PlayingCards from '../Card/PlayingCards';

const Cards = ({ dealer, player, playing, first }) => {
  return (
    <Fragment>
      <div className="dealer">
        {dealer.map((card) => (
          <DealersCards key={card.id} {...card} />
        ))}
      </div>
      <div className="playing">
        {first ? (
          <Fragment>
            <DealersCards {...playing[0]} />
            <DealersCards {...playing[1]} />
            <DealersCards {...playing[2]} />
          </Fragment>
        ) : null}
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
