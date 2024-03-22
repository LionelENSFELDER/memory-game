import { CardType } from "../types";

import chase from "../assets/img/pawpatrol/chase.png";
import marcus from "../assets/img/pawpatrol/marcus.png";
import rocky from "../assets/img/pawpatrol/rocky.png";
import rubben from "../assets/img/pawpatrol/rubben.png";
import stella from "../assets/img/pawpatrol/stella.png";
import zuma from "../assets/img/pawpatrol/zuma.png";

const cards: CardType[] = [
  { id: 1, name: "chase", image: chase, isFlipped: false },
  { id: 2, name: "chase", image: chase, isFlipped: false },
  { id: 3, name: "marcus", image: marcus, isFlipped: false },
  { id: 4, name: "marcus", image: marcus, isFlipped: false },
  { id: 5, name: "rocky", image: rocky, isFlipped: false },
  { id: 6, name: "rocky", image: rocky, isFlipped: false },
  { id: 7, name: "stella", image: stella, isFlipped: false },
  { id: 8, name: "stella", image: stella, isFlipped: false },
  { id: 9, name: "rubben", image: rubben, isFlipped: false },
  { id: 10, name: "rubben", image: rubben, isFlipped: false },
  { id: 11, name: "zuma", image: zuma, isFlipped: false },
  { id: 12, name: "zuma", image: zuma, isFlipped: false },
];

const pawpatrolCards = cards.sort(() => Math.random() - 0.5);
export default pawpatrolCards;
