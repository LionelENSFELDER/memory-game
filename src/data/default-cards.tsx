import shuffleArray from "../utils/shuffle";

import blue from "../assets/img/katuri/blue.png";
import brown from "../assets/img/katuri/brown.png";
import pink from "../assets/img/katuri/pink.png";
import yellow from "../assets/img/katuri/yellow.png";
import spider from "../assets/img/katuri/spider.png";
import ladybug from "../assets/img/katuri/ladybug.png";

const cards = [
  { id: 1, name: "blue", image: blue },
  { id: 2, name: "blue", image: blue },
  { id: 3, name: "brown", image: brown },
  { id: 4, name: "brown", image: brown },
  { id: 5, name: "pink", image: pink },
  { id: 6, name: "pink", image: pink },
  { id: 7, name: "yellow", image: yellow },
  { id: 8, name: "yellow", image: yellow },
  { id: 9, name: "spider", image: spider },
  { id: 10, name: "spider", image: spider },
  { id: 11, name: "ladybug", image: ladybug },
  { id: 12, name: "ladybug", image: ladybug },
];

const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));

export const defaultCardsData = shuffleArray(cardsData);
