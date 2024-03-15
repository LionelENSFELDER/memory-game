import { useEffect, useState } from "react";
import { defaultCardsData } from "./data/default-cards";
import Card from "./components/card";
import "./App.css";

function App() {
  const checkIfCardsMatch = (firtsCardIndex, secondCardIndex) => {
    if (
      currentCards[firtsCardIndex].name === currentCards[secondCardIndex].name
    ) {
      console.log("match");
      setSelectedCards([]);
    } else {
      console.log("not match");
      const a = currentCards;
      a[firtsCardIndex].isFlipped = false;
      a[secondCardIndex].isFlipped = false;
      setTimeout(() => {
        setCurrentCards([...a]);
        setSelectedCards([]);
      }, 500);
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
      <button
        onClick={() => window.location.reload(false)}
        className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Reload game
        </span>
      </button>
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
