import * as DecksDatabase from "../helpers/decks"

import { RECEIVE_DECKS } from "./types"

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const getDecks = () => dispatch =>
  DecksDatabase.getDecks().then(decks => dispatch(receiveDecks(decks)))

export const addCardToDeck = (title, question) => dispatch =>
  DecksDatabase.newCardToDeck(title, question).then(updatedDecks =>
    dispatch(receiveDecks(updatedDecks))
  )

export const saveDeckTitle = title => dispatch =>
  DecksDatabase.writeDeckTitle(title).then(newDecks =>
    dispatch(receiveDecks(newDecks))
  )
