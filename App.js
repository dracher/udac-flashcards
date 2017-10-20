import React, { Component } from "react";
import { View, Platform, StatusBar } from "react-native";
import TopStatusBar from "./components/TopStatusBar";
import DeckList from "./components/DeckList";
import DeckView from "./components/DeckView";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import NewQuizzCard from "./components/NewQuiz";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import { purple, white } from "./helpers/colors";
import { createStore, applyMiddleware, compose } from "redux";
import { lanuchNotification } from "./helpers/notifications";
import { Provider } from "react-redux";

import reducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const DeckRoute = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  },
  NewQuizzCard: {
    screen: NewQuizzCard
  },
  Quiz: {
    screen: Quiz
  }
});

const Tabs = TabNavigator(
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

export default class App extends Component {
  componentDidMount() {
    lanuchNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 22 }} />
          <StatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    );
  }
}
