import React from 'react';
import cardBack from '../../assets/cardBack.png';
import '../../index.scss';

const PlayingCards = ({ image, first }) => {
  return (
    <div className="card">
      {first ? (
        <img src={image} alt="card" />
      ) : (
        <img src={cardBack} alt="card-back" />
      )}
    </div>
  );
};

export default PlayingCards;
