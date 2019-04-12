import React from "react";

import characters from "../characters";

const CharactersContext = React.createContext();

const initialState = {
  characters,
  throne: ""
};

const updateDestiny = (state, payload) => {
  const { character, destiny } = payload;
  const selectedCharacter = state.characters[character];
  const updatedDestiny = destiny === selectedCharacter.destiny ? "" : destiny;

  return {
    ...state,
    characters: {
      ...state.characters,
      [character]: {
        ...selectedCharacter,
        destiny: updatedDestiny
      }
    }
  };
};

const setThrone = (state, character) => ({
  ...state,
  throne: character
});

const resetThrone = state => {
  if (state.throne) {
    return {
      ...state,
      characters: {
        ...state.characters,
        [state.throne]: {
          ...state.characters[state.throne],
          destiny: ""
        }
      }
    };
  }
  return state;
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "throne":
      // Update the new regent status
      return updateDestiny(
        // Set the next character on the throne
        setThrone(
          // Reset the last regent
          resetThrone({
            ...state
          }),
          action.payload
        ),
        {
          character: action.payload,
          destiny: "Throne"
        }
      );
    case "destiny":
      return updateDestiny(state, action.payload);
    default:
      return state;
  }
};

const CharactersProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <CharactersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CharactersContext.Provider>
  );
};

const CharactersConsumer = CharactersContext.Consumer;

export { CharactersContext, CharactersProvider, CharactersConsumer };
