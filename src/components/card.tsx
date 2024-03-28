import backLight from "../assets/img/back-face-light.jpg";
import backDark from "../assets/img/back-face-dark.jpg";
import { CardType } from "../types";
import { MouseEventHandler } from "react";

interface CardProps {
  card: CardType;
  onClick: MouseEventHandler<HTMLDivElement>;
}
const Card = ({ card, onClick }: CardProps) => {
  return (
    <div
      className={`
      h-56 w-40 
      text-white 
      max-w-full 
      rounded-lg 
      block 
      p-2 
      bg-zinc-100
      hover:bg-gray-100 
      dark:bg-neutral-900 
      dark:border-gray-700 
      dark:hover:bg-gray-700 
      duration-500 
      memory-card 
      hover:drop-shadow-xl${card.isFlipped ? " flip" : ""}
      `}
      onClick={onClick}
      data-testid={card.id}
    >
      <img
        className="block dark:hidden rounded-lg w-full h-full object-scale-down"
        src={card.isFlipped ? card.image : backLight}
        alt="Card"
      />
      <img
        className="hidden dark:block rounded-lg w-full h-full object-scale-down"
        src={card.isFlipped ? card.image : backDark}
        alt="Card"
      />
    </div>
  );
};

export default Card;
