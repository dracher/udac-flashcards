import { StyleSheet } from "react-native"
import { gray, white, black, purple } from "../helpers/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 45,
    fontWeight: "bold"
  },
  cardsNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: gray
  },
  addCardBtn: {
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    marginTop: 60,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  startQuizBtn: {
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    paddingVertical: 20,
    paddingHorizontal: 53,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 20,
    textAlign: "center"
  }
})
