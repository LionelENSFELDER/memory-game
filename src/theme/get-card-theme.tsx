import katuriCards from "../data/katuri-cards";
import frameworksCards from "../data/frameworks-cards";
import pawpatrolCards from "../data/pawpatrol-cards";
import superHerosCards from "../data/superheros";

export default function getCardTheme(theme: string) {
  switch (theme) {
    case "frameworks":
      return frameworksCards;
      break;
    case "katuri":
      return katuriCards;
      break;
    case "pawpatrol":
      return pawpatrolCards;
      break;
    case "superheros":
      return superHerosCards;
      break;
    default:
      return katuriCards;
      break;
  }
}
