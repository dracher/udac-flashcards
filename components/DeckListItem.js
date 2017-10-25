import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import styles from "./DeckListItem.style"

export default class DeckListItem extends Component {
  render() {
    const { title, questions, navigation } = this.props
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
    )
  }
}
