import katuriCards from "../data/katuri";
import frameworksCards from "../data/frameworks";
import pawpatrolCards from "../data/pawpatrol";
import superHerosCards from "../data/superheros";
import superPatrolCards from "../data/superpatrol";

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
    case "superpatrol":
      return superPatrolCards;
      break;
    default:
      return katuriCards;
      break;
  }
}
