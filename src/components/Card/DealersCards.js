import React from 'react';
import cardBack from '../../assets/cardBack.png';
import '../../index.scss';

const DealersCards = ({ image, showDealer }) => {
  return (
    <div className="card">
      {showDealer ? (
        <img src={image} alt="card" />
      ) : (
        <img src={cardBack} alt="card-back" />
      )}
    </div>
  );
};

export default DealersCards;
