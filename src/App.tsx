import { useEffect, useState } from "react";
import { CardType } from "./types";
import Card from "./components/card";
import Navbar from "./components/navbar";
import katuriCards from "./data/katuri-cards";
import frameworksCards from "./data/frameworks-cards";
import pawpatrolCards from "./data/pawpatrol-cards";
import ConfettiExplosion from "react-confetti-explosion";
import "./App.css";

function App() {
  const [isExploding, setIsExploding] = useState<boolean>(false);
  const getCardTheme = (theme: string) => {
    switch (theme) {
      case "frameworks":
        return frameworksCards;
        break;
      case "katuri":
        return katuriCards;
        break;
      case "pawpatrol":
        return pawpatrolCards;
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

  const flipNoMatchCards = (
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
      flipNoMatchCards(firtsCardIndex, secondCardIndex);
    }

    if (
      currentCards[firtsCardIndex].name === currentCards[secondCardIndex].name
    ) {
      console.log("match");
      setSelectedCards([]);
      if (currentCards.every(isElementFlipped)) {
        setTimeout(() => {
          setIsExploding(true);
        }, 600);
      }
    } else {
      console.log("not match");
      flipNoMatchCards(firtsCardIndex, secondCardIndex);
    }
  };

  const isElementFlipped = (element: CardType) => element.isFlipped === true;

  useEffect(() => {
    if (selectedCards.length == 2) {
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
      {isExploding && (
        <ConfettiExplosion
          id="confetti"
          className="absolute inset-x-0 top-20 h-5"
          duration={3000}
          height={"200vh"}
          width={4000}
          particleCount={200}
          particleSize={10}
          force={1}
        />
      )}
      <Navbar setCardsTheme={handleChangeCardTheme} />
      <div className="flex justify-center align-middle">
        <div className="p-8 w-fit grid grid-cols-2 md:grid-cols-4 gap-2">
          {currentCards.map((card, index) => {
            return (
              <Card
                key={card.id}
                card={card}
                onClick={() => {
                  if (selectedCards.length < 2) {
                    card.isFlipped = true;
                    HandleClick(index);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* {isExploding && (
        <ConfettiExplosion
          id="confetti2"
          className="absolute right-0 bottom-0"
          duration={2000}
          height={"200vh"}
          width={4000}
          particleCount={200}
          particleSize={10}
          force={1}
        />
      )} */}
    </div>
  );
}

export default App;
