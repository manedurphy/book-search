import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards/Cards';
import { Hand } from 'pokersolver';

const Home = () => {
  const [dealersCards, setDealersCards] = useState([]);
  const [playersCards, setPlayersCards] = useState([]);
  const [playingCards, setPlayingCards] = useState([]);
  const [first, setFirst] = useState(false);
  const [final, setFinal] = useState(false);
  const [showDealer, setShowDealer] = useState(false);
  const [dealersResults, setDealersResults] = useState({});
  const [playersResults, setPlayersResults] = useState({});
  const [winner, setWinner] = useState('');

  const formatHands = (card) => {
    const splitCard = card.split('');
    if (splitCard[0] === '0') {
      splitCard[0] = 'T';
    }
    splitCard[1] = splitCard[1].toLowerCase();
    return splitCard.join('');
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://deckofcardsapi.com/api/deck/new/draw/?count=9`)
        .then((response) => {
          console.log(response.data.cards);
          const newCards = response.data.cards.map((item) => {
            const { code, image } = item;
            return { id: item.code, image };
          });

          setDealersCards([newCards[0], newCards[1]]);
          setPlayersCards([newCards[2], newCards[3]]);
          setPlayingCards([
            newCards[4],
            newCards[5],
            newCards[6],
            newCards[7],
            newCards[8],
          ]);

          const dealersHand = [
            newCards[0].id,
            newCards[1].id,
            newCards[4].id,
            newCards[5].id,
            newCards[6].id,
            newCards[7].id,
            newCards[8].id,
          ].map(formatHands);
          console.log(dealersHand);
          setDealersResults(Hand.solve(dealersHand));

          const playersHand = [
            newCards[2].id,
            newCards[3].id,
            newCards[4].id,
            newCards[5].id,
            newCards[6].id,
            newCards[7].id,
            newCards[8].id,
          ].map(formatHands);
          console.log(playersHand);
          setPlayersResults(Hand.solve(playersHand));
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const playHandler = () => {
    setFirst(true);
  };
  const finalHandler = () => {
    setFinal(true);
  };

  const showDealerHandler = () => {
    setShowDealer(true);
    console.log(playersResults);
    console.log(dealersResults);
    const result = Hand.winners([dealersResults, playersResults]);
    JSON.stringify(result[0]) === JSON.stringify(dealersResults)
      ? setWinner('Dealer Wins!')
      : setWinner('You Win!');
  };

  const resetHandler = () => {
    window.location.reload();
  };
  return (
    <div className="play-field">
      {playingCards.length > 0 &&
      dealersCards.length > 0 &&
      playersCards.length > 0 ? (
        <Fragment>
          {winner ? <h1>{winner}</h1> : null}
          <h2>
            dealer{showDealer ? <span>: {dealersResults.descr}</span> : null}
          </h2>
          <Cards
            dealer={dealersCards}
            player={playersCards}
            playing={playingCards}
            first={first}
            final={final}
            showDealer={showDealer}
          />
          <h2>
            you{showDealer ? <span>: {playersResults.descr}</span> : null}
          </h2>
        </Fragment>
      ) : (
        <h3>loading...</h3>
      )}
      {!first ? (
        <button onClick={playHandler}>Play</button>
      ) : first && !final ? (
        <button onClick={finalHandler}>final round</button>
      ) : final && !showDealer ? (
        <button onClick={showDealerHandler}>show dealer's cards</button>
      ) : (
        showDealer && <button onClick={resetHandler}>play again</button>
      )}
    </div>
  );
};

export default Home;
