import shuffleArray from "../utils/shuffle";

import aurelia from "../assets/img/default-cards/aurelia.svg";
import angular from "../assets/img/default-cards/angular.svg";
import ember from "../assets/img/default-cards/ember.svg";
import vue from "../assets/img/default-cards/vue.svg";
import backbone from "../assets/img/default-cards/backbone.svg";
import react from "../assets/img/default-cards/react.svg";

const cards = [
  { id: 1, name: "aurelia", image: aurelia },
  { id: 2, name: "aurelia", image: aurelia },
  { id: 3, name: "angular", image: angular },
  { id: 4, name: "angular", image: angular },
  { id: 5, name: "ember", image: ember },
  { id: 6, name: "ember", image: ember },
  { id: 7, name: "vue", image: vue },
  { id: 8, name: "vue", image: vue },
  { id: 9, name: "backbone", image: backbone },
  { id: 10, name: "backbone", image: backbone },
  { id: 11, name: "react", image: react },
  { id: 12, name: "react", image: react },
];

const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));

export const defaultCardsData = shuffleArray(cardsData);
