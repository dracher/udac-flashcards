import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import styles from "./DeckView.style"

class DeckView extends Component {
  render() {
    const navigation = this.props.navigation
    const title = navigation.state.params.title
    const decks = this.props.decks[title]
    const questions = decks["questions"]
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
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps, null)(DeckView)
