import { CardType } from "../types";

import spiderman from "../assets/img/superheros/spiderman.png";
import batman from "../assets/img/superheros/batman.png";
import groot from "../assets/img/superheros/groot.png";
import hulk from "../assets/img/superheros/hulk.png";
import flash from "../assets/img/superheros/flash.png";
import america from "../assets/img/superheros/america.png";

const cards: CardType[] = [
  { id: 1, name: "spiderman", image: spiderman, isFlipped: false },
  { id: 2, name: "spiderman", image: spiderman, isFlipped: false },
  { id: 3, name: "batman", image: batman, isFlipped: false },
  { id: 4, name: "batman", image: batman, isFlipped: false },
  { id: 5, name: "groot", image: groot, isFlipped: false },
  { id: 6, name: "groot", image: groot, isFlipped: false },
  { id: 7, name: "hulk", image: hulk, isFlipped: false },
  { id: 8, name: "hulk", image: hulk, isFlipped: false },
  { id: 9, name: "flash", image: flash, isFlipped: false },
  { id: 10, name: "flash", image: flash, isFlipped: false },
  { id: 11, name: "america", image: america, isFlipped: false },
  { id: 12, name: "america", image: america, isFlipped: false },
];

const superHerosCards = cards.sort(() => Math.random() - 0.5);
export default superHerosCards;
