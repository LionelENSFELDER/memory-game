import { CardType } from "../types";

import aurelia from "../assets/img/default-cards/aurelia.svg";
import angular from "../assets/img/default-cards/angular.svg";
import ember from "../assets/img/default-cards/ember.svg";
import vue from "../assets/img/default-cards/vue.svg";
import backbone from "../assets/img/default-cards/backbone.svg";
import react from "../assets/img/default-cards/react.svg";

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

export const jsFrameworksCards = cards.sort(() => Math.random() - 0.5);
