import React from 'react';
import cardBack from '../../assets/cardBack.png';
import '../../index.scss';

const PlayingCards = ({ image, revealed }) => {
  return (
    <div className="card">
      {revealed ? (
        <img src={image} alt="card" />
      ) : (
        <img src={cardBack} alt="card-back" />
      )}
    </div>
  );
};

export default PlayingCards;
