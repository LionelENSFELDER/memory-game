import { CardType } from "../types";

import blue from "../assets/img/katuri/blue.png";
import brown from "../assets/img/katuri/brown.png";
import pink from "../assets/img/katuri/pink.png";
import yellow from "../assets/img/katuri/yellow.png";
import spider from "../assets/img/katuri/spider.png";
import ladybug from "../assets/img/katuri/ladybug.png";

const cards: CardType[] = [
  { id: 1, name: "blue", image: blue, isFlipped: false },
  { id: 2, name: "blue", image: blue, isFlipped: false },
  { id: 3, name: "brown", image: brown, isFlipped: false },
  { id: 4, name: "brown", image: brown, isFlipped: false },
  { id: 5, name: "pink", image: pink, isFlipped: false },
  { id: 6, name: "pink", image: pink, isFlipped: false },
  { id: 7, name: "yellow", image: yellow, isFlipped: false },
  { id: 8, name: "yellow", image: yellow, isFlipped: false },
  { id: 9, name: "spider", image: spider, isFlipped: false },
  { id: 10, name: "spider", image: spider, isFlipped: false },
  { id: 11, name: "ladybug", image: ladybug, isFlipped: false },
  { id: 12, name: "ladybug", image: ladybug, isFlipped: false },
];

const katuriCards = cards.sort(() => Math.random() - 0.5);
export default katuriCards;
