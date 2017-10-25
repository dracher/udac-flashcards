import { AsyncStorage } from "react-native";

export const DECKS_KEY = "udacx-flashcards:decks";

export async function getDecks() {
  let decks = await fetchDecks();
  return decks;
}

export async function getDeck(id) {
  let decks = await fetchDecks();
  return decks[id];
}

export async function fetchDecks() {
  let response = await AsyncStorage.getItem(DECKS_KEY);
  let decks = (await JSON.parse(response)) || {};
  return decks;
}

export async function writeDeckTitle(title) {
  let decks = await fetchDecks();
  let writtenDecks = {
    ...decks,
    [title]: {
      title,
      questions: []
    }
  };
  await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(writtenDecks));
  return writtenDecks;
}

export async function newCardToDeck(title, question) {
  let decks = await fetchDecks();
  let deck = await getDeck(title);
  let newDeck = {
    title,
    questions: [...deck.questions, question]
  };
  let newDecks = {
    ...decks,
    [title]: newDeck
  };
  await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks));
  return newDecks;
}
