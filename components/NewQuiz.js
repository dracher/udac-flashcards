import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native"
import { connect } from "react-redux"
import { addCardToDeck } from "../actions"

import styles from "./NewQuiz.style"

class NewQuiz extends Component {
  state = {
    question: "",
    answer: ""
  }

  submit = () => {
    const { question, answer } = this.state
    const title = this.props.navigation.state.params.title
    const quizzCard = { question, answer }
    if (question !== "" && answer !== "") {
      this.props.addCardToDeck(title, quizzCard)
      this.props.navigation.goBack()
      this.setState({ question: "", answer: "" })
    }
  }

  render() {
    const title = this.props.navigation.state.params.title

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.addCard}>Add Card</Text>
          <Text style={styles.textBoxLabel}>Question</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <Text style={styles.textBoxLabel}>Answer</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (title, quiz) => dispatch(addCardToDeck(title, quiz))
  }
}

export default connect(null, mapDispatchToProps)(NewQuiz)
