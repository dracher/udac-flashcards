import { StyleSheet } from "react-native"
import { white, gray, green, red, purple } from "../helpers/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: white,
    alignItems: "center"
  },
  revalCardText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  revalCard: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  numCards: {
    fontSize: 18,
    fontWeight: "500",
    color: gray
  },
  correctBtn: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 60,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: green,
    height: 45,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 20,
    textAlign: "center"
  },
  finailResults: {
    fontSize: 40,
    fontWeight: "400"
  },
  incorrectBtn: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: red,
    height: 45,
    paddingVertical: 20,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  resetBtn: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 50,
    paddingVertical: 20,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  backToDeckBtn: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 50,
    paddingVertical: 20,
    paddingHorizontal: 90,
    justifyContent: "center",
    alignItems: "center"
  }
})
