import { useEffect, useState } from "react";
import { CardType } from "./types";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Confetti from "./components/confetti";
import Modal from "./components/win-modal";
import getCardTheme from "./theme/get-card-theme";
import "./App.css";

interface TwoCardsIndexProps {
  firstIndex: number;
  secondIndex: number;
}

function App() {
  const [isExploding, setIsExploding] = useState<boolean>(false);
  const [IsModalHidden, setIsModalHidden] = useState<boolean>(true);
  const [cardsTheme, setCardsTheme] = useState<string>("katuri");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const isElementFlipped = (element: CardType) => element.isFlipped === true;
  const [currentCards, setCurrentCards] = useState<CardType[]>([
    ...getCardTheme(cardsTheme),
  ]);

  const handleChangeCardTheme = (theme: string) => {
    setCardsTheme(theme);
  };

  const noMatchCards = ({ firstIndex, secondIndex }: TwoCardsIndexProps) => {
    const a = currentCards;
    a[firstIndex].isFlipped = false;
    a[secondIndex].isFlipped = false;
    setTimeout(() => {
      setCurrentCards([...a]);
      setSelectedCards([]);
    }, 500);
  };

  const isEndGame = () => {
    if (currentCards.every(isElementFlipped)) {
      setTimeout(() => {
        setIsExploding(true);
        setIsModalHidden(false);
      }, 600);
    }
  };

  const compareCards = ({ firstIndex, secondIndex }: TwoCardsIndexProps) => {
    if (
      currentCards[firstIndex].id === currentCards[secondIndex].id ||
      currentCards[firstIndex].name !== currentCards[secondIndex].name
    ) {
      noMatchCards({ firstIndex, secondIndex });
    } else {
      setSelectedCards([]);
      isEndGame();
    }
  };

  useEffect(() => {
    if (selectedCards.length == 2) {
      const firstIndex = selectedCards[0];
      const secondIndex = selectedCards[1];
      compareCards({ firstIndex, secondIndex });
    }
  }, [selectedCards]);

  const HandleCardClick = (index: number) => {
    if (selectedCards.length < 2) {
      currentCards[index].isFlipped = true;
      const nextState = [...selectedCards, index];
      setSelectedCards(nextState);
    }
  };

  useEffect(() => {
    setCurrentCards([...getCardTheme(cardsTheme)]);
  }, [cardsTheme]);

  return (
    <div className="bg-gray-900 sm:h-fit md:h-screen">
      <Modal isHidden={IsModalHidden} />
      {isExploding && (
        <Confetti
          onComplete={() => {
            setIsExploding(false);
            setIsModalHidden(true);
          }}
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
                onClick={() => HandleCardClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
