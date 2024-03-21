import { useEffect, useState } from "react";
import { CardType } from "./types";
import Card from "./components/card";
import Navbar from "./components/navbar";
import katuriCards from "./data/katuri-cards";
import frameworksCards from "./data/frameworks-cards";
import "./App.css";

function App() {
  const getCardTheme = (theme: string) => {
    switch (theme) {
      case "frameworks":
        return frameworksCards;
        break;
      case "katuri":
        return katuriCards;
        break;
      default:
        return katuriCards;
        break;
    }
  };

  const [cardsTheme, setCardsTheme] = useState<string>("katuri");
  const handleChangeCardTheme = (theme: string) => {
    setCardsTheme(theme);
  };

  const [currentCards, setCurrentCards] = useState<CardType[]>([
    ...getCardTheme(cardsTheme),
  ]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

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

  useEffect(() => {
    if (selectedCards.length >= 2) {
      checkIfCardsMatch(selectedCards[0], selectedCards[1]);
    }
  }, [selectedCards]);

  const HandleClick = (index: number) => {
    const nextState = [...selectedCards, index];
    setSelectedCards(nextState);
  };

  useEffect(() => {
    setCurrentCards([...getCardTheme(cardsTheme)]);
  }, [cardsTheme]);

  return (
    <div className="bg-gray-900 sm:h-fit md:h-screen">
      <Navbar setCardsTheme={handleChangeCardTheme} />
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
    </div>
  );
}

export default App;
