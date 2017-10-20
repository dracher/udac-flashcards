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
import { black, white, purple } from "../helpers/colors";

class NewDeck extends Component {
  state = {
    title: ""
  };

  submit = () => {
    title = this.state.title;
    if (title !== "") {
      this.props.saveDeckTitle(title);
      this.props.navigation.navigate("Decks");
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

const styles = StyleSheet.create({
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
});

function mapDispatchToProps(dispatch) {
  return {
    saveDeckTitle: title => dispatch(saveDeckTitle(title))
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
