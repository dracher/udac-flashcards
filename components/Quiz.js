import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  lanuchNotification,
  clearNotification
} from "../helpers/notifications";
import { white, gray, green, red, purple } from "../helpers/colors";

export default class Quiz extends Component {
  state = {
    current: 1,
    show: true,
    correctNumber: 0,
    finished: false
  };

  revalCard = () => {
    const show = !this.state.show;
    this.setState({ show });
  };

  nextQuiz = quizzes => {
    const deck = this.props.navigation.state.params.decks;
    const questions = deck.questions;
    const correctNumber = quizzes
      ? this.state.correctNumber + 1
      : this.state.correctNumber;
    const current = this.state.current + 1;
    const show = true;
    this.setState({ current, show, correctNumber });
    if (current > questions.length) {
      this.setState({ finished: true });
    }
  };

  resetQuiz = () => {
    this.setState({
      current: 1,
      show: true,
      correctNumber: 0,
      finished: false
    });
  };

  render() {
    const deck = this.props.navigation.state.params.decks;
    const title = deck.title;
    const questions = deck.questions;
    const { current, show, correctNumber, finished } = this.state;

    if (finished) {
      clearNotification().then(lanuchNotification);
      const correctAnswerPercentage = Math.round(
        correctNumber / questions.length * 100
      );
      return (
        <View style={styles.container}>
          <Text style={styles.finailResults}>
            {correctAnswerPercentage} % Correct Answer{" "}
          </Text>
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => this.resetQuiz()}
          >
            <Text style={styles.btnText}> Reset Quiz </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backToDeckBtn}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.numCards}>
            {" "}
            {current}/ {questions.length}{" "}
          </Text>
          {show ? (
            <Text style={styles.revalCardText}>
              {questions[current - 1].question}{" "}
            </Text>
          ) : (
            <Text style={styles.revalCardText}>
              {questions[current - 1].answer}{" "}
            </Text>
          )}
          <TouchableOpacity style={styles.revalCard} onPress={this.revalCard}>
            <Text style={styles.btnText}>{show ? "Answer" : "Question"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.correctBtn}
            onPress={this.nextQuiz.bind(null, true)}
          >
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.incorrectBtn}
            onPress={this.nextQuiz.bind(null, false)}
          >
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
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
});
