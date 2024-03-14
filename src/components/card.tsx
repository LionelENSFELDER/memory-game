import defaultBackground from "../assets/img/katuri/back.jpg";

const Card = ({ card, onClick }) => {
  return (
    <div
      className="text-white h-auto max-w-full rounded-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      onClick={onClick}
      data-testid={card.id}
    >
      <img
        className="front-face"
        src={card.isFlipped ? card.image : defaultBackground}
        alt="Card"
      />
    </div>
  );
};

export default Card;
