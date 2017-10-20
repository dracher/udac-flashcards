import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { gray, white, black, purple } from "../helpers/colors";

class DeckView extends Component {
  render() {
    const navigation = this.props.navigation;
    const title = navigation.state.params.title;
    const decks = this.props.decks[title];
    const questions = decks["questions"];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardsNumber}>
          {questions.length}
          <Text>cards</Text>
        </Text>
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() => navigation.navigate("NewQuizzCard", { title })}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        {questions.length > 0 && (
          <TouchableOpacity
            style={styles.startQuizBtn}
            onPress={() => navigation.navigate("Quiz", { decks })}
          >
            <Text style={styles.btnText}> Start Quiz </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps, null)(DeckView);
