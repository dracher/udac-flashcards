import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { saveDeckTitle } from "../actions";
import { connect } from "react-redux";

import styles from "./NewDeck.style";

class NewDeck extends Component {
  state = {
    title: ""
  };

  submit = () => {
    title = this.state.title;
    if (title !== "") {
      this.props
        .saveDeckTitle(title)
        .then(() => this.props.navigation.navigate("DeckView", { title }));

      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.newDeckTitle}>
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Deck Title"
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveDeckTitle: title => dispatch(saveDeckTitle(title))
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
