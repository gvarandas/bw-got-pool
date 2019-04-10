import React from "react";
import styled from "@emotion/styled";

import Character from "./Character";

const GradeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterGrade = ({ charactersInfo = [] }) => (
  <GradeContainer>
    {charactersInfo.map(character => (
      <Character
        key={character.name}
        name={character.name}
        picture={character.picture}
      />
    ))}
  </GradeContainer>
);

export default CharacterGrade;
