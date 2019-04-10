import React from "react";
import styled from "@emotion/styled";
import CharButton from "./CharButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 160px;
  margin: 10px 5px;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 2.5%;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;

const CharName = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const CharPicture = styled.figure`
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom-left-radius: 2.5%;
  border-bottom-right-radius: 2.5%;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ButtonContainer = styled.div`
  margin: -35%;
`;

const Character = ({ name, picture = "" }) => (
  <Container>
    <CharName>
      <p>{name}</p>
    </CharName>
    <CharPicture>
      <img src={picture} alt={name} />
    </CharPicture>
    <ButtonContainer>
      <CharButton name="💪" label="Alive" />
      <CharButton name="💀" label="Dead" />
      <CharButton name="🧟‍♂️" label="Wight" />
    </ButtonContainer>
  </Container>
);

export default Character;
