import { StackNavigator } from "react-navigation";
import DeckList from "../components/DeckList";
import DeckView from "../components/DeckView";
import NewQuizzCard from "../components/NewQuiz";
import Quiz from "../components/Quiz";

export default StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  },
  NewQuizzCard: {
    screen: NewQuizzCard
  },
  Quiz: {
    screen: Quiz
  }
});
