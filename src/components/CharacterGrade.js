import React, { useContext } from "react";
import styled from "@emotion/styled";

import { CharactersContext } from "../containers/CharacterContext";
import Character from "./Character";

const GradeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterGrade = () => {
  const { state } = useContext(CharactersContext);
  return (
    <GradeContainer>
      {Object.entries(state.characters).map(([characterKey, character]) => (
        <Character
          key={characterKey}
          characterKey={characterKey}
          name={character.name}
          destiny={character.destiny}
          picture={character.picture}
        />
      ))}
    </GradeContainer>
  );
};

export default CharacterGrade;
