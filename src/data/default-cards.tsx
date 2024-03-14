import shuffleArray from "../utils/shuffle";

import blue from "../assets/img/katuri/blue.jpg";
import brown from "../assets/img/katuri/brown.jpg";
import family from "../assets/img/katuri/family.jpg";
import mum from "../assets/img/katuri/mum.jpg";
import pink from "../assets/img/katuri/pink.jpg";
import yellow from "../assets/img/katuri/yellow.jpg";

const cards = [
  { id: 1, name: "blue", image: blue },
  { id: 2, name: "blue", image: blue },
  { id: 3, name: "brown", image: brown },
  { id: 4, name: "brown", image: brown },
  { id: 5, name: "family", image: family },
  { id: 6, name: "family", image: family },
  { id: 7, name: "mum", image: mum },
  { id: 8, name: "mum", image: mum },
  { id: 9, name: "pink", image: pink },
  { id: 10, name: "pink", image: pink },
  { id: 11, name: "yellow", image: yellow },
  { id: 12, name: "yellow", image: yellow },
];

const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));

export const defaultCardsData = shuffleArray(cardsData);
