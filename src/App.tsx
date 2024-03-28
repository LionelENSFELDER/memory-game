import { useEffect, useState } from "react";
import { CardType } from "./types";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Confetti from "./components/confetti";
import Modal from "./components/win-modal";
import getCardTheme from "./theme/get-card-theme";
// @ts-ignore
import useSound from "use-sound";
import flipSound from "./assets/sound/flip.mp3";
import matchSound from "./assets/sound/match.mp3";
import noMatchSound from "./assets/sound/no-match.mp3";
import winSound from "./assets/sound/win.mp3";
import winVoiceSound from "./assets/sound/win-voice.mp3";
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

  const [playFlipSound] = useSound(flipSound);
  const [playMatchSound] = useSound(matchSound);
  const [playNoMatchSound] = useSound(noMatchSound);
  const [playWinSound] = useSound(winSound);
  const [playWinVoiceSound] = useSound(winVoiceSound);

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
        playWinSound();
        playWinVoiceSound();
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
      playNoMatchSound();
      noMatchCards({ firstIndex, secondIndex });
    } else {
      playMatchSound();
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
    playFlipSound();
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
    <div className="bg-white dark:bg-gray-900 sm:h-fit md:h-screen">
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
