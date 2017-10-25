import { StyleSheet } from "react-native"
import { black, white, purple } from "../helpers/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white
  },
  contentContainer: {
    paddingVertical: 50
  },
  newDeckTitle: {
    fontSize: 40,
    fontWeight: "bold"
  },
  inputBox: {
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black,
    marginTop: 60,
    marginBottom: 20,
    padding: 10,
    width: 300
  },
  submitBtn: {
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 24,
    textAlign: "center"
  }
})
