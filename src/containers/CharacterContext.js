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

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "throne":
      const throneState = {
        ...state,
        // Reset previous king/queen
        characters: {
          ...state.characters,
          [state.throne]: {
            ...state.characters[state.throne],
            destiny: ""
          }
        },
        // Set the next character on the throne
        throne: action.payload
      };
      // Update the new regent status
      return updateDestiny(throneState, {
        character: action.payload,
        destiny: "Throne"
      });
    case "destiny":
      return updateDestiny(state, action);
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
