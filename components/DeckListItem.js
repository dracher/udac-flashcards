import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { white, gray } from "../helpers/colors";

export default class DeckListItem extends Component {
  render() {
    const { title, questions, navigation } = this.props;
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate("DeckView", { title })}
        >
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.numOfCards}>
            {questions.length}
            <Text style={styles.numOfCards}>cardss</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: gray,
    flex: 1,
    padding: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deckTitle: {
    fontWeight: "bold",
    fontSize: 25
  },
  numOfCards: {
    fontSize: 15,
    fontWeight: "bold",
    color: gray
  }
});
