import { CardType } from "../types";

import chase from "../assets/img/superpatrol/chase.png";
import marcus from "../assets/img/superpatrol/marcus.png";
import rocky from "../assets/img/superpatrol/rocky.png";
import ruben from "../assets/img/superpatrol/ruben.png";
import stella from "../assets/img/superpatrol/stella.png";
import zuma from "../assets/img/superpatrol/zuma.png";

const cards: CardType[] = [
  { id: 1, name: "chase", image: chase, isFlipped: false },
  { id: 2, name: "chase", image: chase, isFlipped: false },
  { id: 3, name: "marcus", image: marcus, isFlipped: false },
  { id: 4, name: "marcus", image: marcus, isFlipped: false },
  { id: 5, name: "rocky", image: rocky, isFlipped: false },
  { id: 6, name: "rocky", image: rocky, isFlipped: false },
  { id: 7, name: "ruben", image: ruben, isFlipped: false },
  { id: 8, name: "ruben", image: ruben, isFlipped: false },
  { id: 9, name: "stella", image: stella, isFlipped: false },
  { id: 10, name: "stella", image: stella, isFlipped: false },
  { id: 11, name: "zuma", image: zuma, isFlipped: false },
  { id: 12, name: "zuma", image: zuma, isFlipped: false },
];

const superPatrolCards = cards.sort(() => Math.random() - 0.5);
export default superPatrolCards;
