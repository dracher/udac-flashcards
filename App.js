import React, { Component } from "react"
import { View, StatusBar } from "react-native"
import { Constants } from "expo"
import { purple, white } from "./helpers/colors"
import { createStore, applyMiddleware, compose } from "redux"
import { launchNotification } from "./helpers/notifications"
import { Provider } from "react-redux"
import reducer from "./reducers"
import thunk from "redux-thunk"
import Tabs from "./routes/tabs"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default class App extends Component {
  componentDidMount() {
    launchNotification()
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
    )
  }
}
