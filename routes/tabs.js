import React from "react";
import { Platform } from "react-native";
import { TabNavigator } from "react-navigation";
import NewDeck from "../components/NewDeck";
import DeckRoute from "./decks";
import { purple, white } from "../helpers/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default TabNavigator(
  {
    Decks: {
      screen: DeckRoute,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      showIcon: true,
      style: {
        height: 65,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1
      }
    }
  }
);
