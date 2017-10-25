import { StyleSheet } from "react-native"
import { black, purple, white } from "../helpers/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white
  },
  addCard: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 40
  },
  textBoxLabel: {
    fontWeight: "bold"
  },
  inputBox: {
    marginBottom: 20,
    padding: 10,
    width: 330,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black,
    backgroundColor: white
  },
  submitBtn: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    paddingVertical: 20,
    paddingHorizontal: 60,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 20,
    textAlign: "center"
  },
  contentContainer: {
    paddingVertical: 50
  }
})
