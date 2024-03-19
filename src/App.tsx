import { useEffect, useState } from "react";
import { CardType } from "./types";
import { katuriCards as Cards } from "./data/katuri-cards";
import Card from "./components/card";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  const updateCurrentCards = (
    firtsCardIndex: number,
    secondCardIndex: number
  ) => {
    const a = currentCards;
    a[firtsCardIndex].isFlipped = false;
    a[secondCardIndex].isFlipped = false;
    setTimeout(() => {
      setCurrentCards([...a]);
      setSelectedCards([]);
    }, 500);
  };

  const checkIfCardsMatch = (
    firtsCardIndex: number,
    secondCardIndex: number
  ) => {
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

  const [currentCards, setCurrentCards] = useState<CardType[]>([...Cards]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useEffect(() => {
    if (selectedCards.length >= 2) {
      checkIfCardsMatch(selectedCards[0], selectedCards[1]);
    }
  }, [selectedCards]);

  const HandleClick = (index: number) => {
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
                onClick={() => {
                  card.isFlipped = true;
                  HandleClick(index);
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
