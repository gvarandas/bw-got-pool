import React from "react";

import characters from "../characters";

const CharactersContext = React.createContext();

const initialState = {
  characters
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "destiny":
      const { character, destiny } = action.payload;
      const selectedCharacter = state.characters[character];
      const updatedDestiny =
        destiny === selectedCharacter.destiny ? "" : destiny;

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
