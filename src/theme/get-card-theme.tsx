import katuriCards from "../data/katuri-cards";
import frameworksCards from "../data/frameworks-cards";
import pawpatrolCards from "../data/pawpatrol-cards";

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
    default:
      return katuriCards;
      break;
  }
}
