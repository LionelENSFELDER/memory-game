import { CardType } from "../types";

import aurelia from "../assets/img/frameworks/aurelia.svg";
import angular from "../assets/img/frameworks/angular.svg";
import ember from "../assets/img/frameworks/ember.svg";
import vue from "../assets/img/frameworks/vue.svg";
import backbone from "../assets/img/frameworks/backbone.svg";
import react from "../assets/img/frameworks/react.svg";

const cards: CardType[] = [
  { id: 1, name: "aurelia", image: aurelia, isFlipped: false },
  { id: 2, name: "aurelia", image: aurelia, isFlipped: false },
  { id: 3, name: "angular", image: angular, isFlipped: false },
  { id: 4, name: "angular", image: angular, isFlipped: false },
  { id: 5, name: "ember", image: ember, isFlipped: false },
  { id: 6, name: "ember", image: ember, isFlipped: false },
  { id: 7, name: "vue", image: vue, isFlipped: false },
  { id: 8, name: "vue", image: vue, isFlipped: false },
  { id: 9, name: "backbone", image: backbone, isFlipped: false },
  { id: 10, name: "backbone", image: backbone, isFlipped: false },
  { id: 11, name: "react", image: react, isFlipped: false },
  { id: 12, name: "react", image: react, isFlipped: false },
];

const jsFrameworksCards = cards.sort(() => Math.random() - 0.5);
export default jsFrameworksCards;
