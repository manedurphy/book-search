import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards/Cards';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [dealersCards, setDealersCards] = useState([]);
  const [playersCards, setPlayersCards] = useState([]);
  const [playingCards, setPlayingCards] = useState([]);
  const [first, setFirst] = useState(false);

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
        })
        .catch((error) => console.log(error));
      //   try {
      //     const response = await fetch(
      //       `https://deckofcardsapi.com/api/deck/new/draw/?count=5`
      //     );
      //     const data = await response.json();
      //     console.log(data);
      //     const { cards } = data;

      //     if (cards) {
      //       const myDeck = cards.map((item) => {
      //         const { code, image } = item;
      //         return { id: code, image };
      //       });
      //       setCards(myDeck);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
    };
    fetchData();
  }, []);

  const playHandler = () => {
    setFirst(!first);
  };

  return (
    <div className="play-field">
      {playingCards.length > 0 &&
      dealersCards.length > 0 &&
      playersCards.length > 0 ? (
        <Fragment>
          <h2>dealer</h2>
          <Cards
            dealer={dealersCards}
            player={playersCards}
            playing={playingCards}
            first={first}
          />
          <h2>you</h2>
        </Fragment>
      ) : (
        <h3>loading...</h3>
      )}
      {!first ? (
        <button onClick={playHandler}>Play</button>
      ) : (
        <button>final round</button>
      )}
    </div>
  );
};

export default Home;
