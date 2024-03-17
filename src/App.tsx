import { useEffect, useState } from "react";
import { defaultCardsData } from "./data/default-cards";
import Card from "./components/card";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  const updateCurrentCards = (firtsCardIndex, secondCardIndex) => {
    const a = currentCards;
    a[firtsCardIndex].isFlipped = false;
    a[secondCardIndex].isFlipped = false;
    setTimeout(() => {
      setCurrentCards([...a]);
      setSelectedCards([]);
    }, 500);
  };

  const checkIfCardsMatch = (firtsCardIndex, secondCardIndex) => {
    if (currentCards[firtsCardIndex].id === currentCards[secondCardIndex].id) {
      updateCurrentCards(firtsCardIndex, secondCardIndex);
    }

    if (
      currentCards[firtsCardIndex].name === currentCards[secondCardIndex].name
    ) {
      console.log("match");
      setSelectedCards([]);
    } else {
      console.log("not match");
      updateCurrentCards(firtsCardIndex, secondCardIndex);
    }
  };

  const [currentCards, setCurrentCards] = useState([...defaultCardsData]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length >= 2) {
      checkIfCardsMatch(selectedCards[0], selectedCards[1]);
    }
  }, [selectedCards]);

  const HandleClick = (event, index) => {
    const nextState = [...selectedCards, index];
    setSelectedCards(nextState);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center align-middle">
        <div className="p-8 w-fit grid grid-cols-2 md:grid-cols-4 gap-2">
          {currentCards.map((card, index) => {
            return (
              <Card
                key={card.id}
                card={card}
                onClick={(event) => {
                  card.isFlipped = true;
                  HandleClick(event, index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
