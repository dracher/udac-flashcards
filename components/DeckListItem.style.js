import { StyleSheet } from "react-native"
import { white, gray } from "../helpers/colors"

export default StyleSheet.create({
  listItem: {
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: gray,
    flex: 1,
    padding: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deckTitle: {
    fontWeight: "bold",
    fontSize: 25
  },
  numOfCards: {
    fontSize: 15,
    fontWeight: "bold",
    color: gray
  }
})
