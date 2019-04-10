import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 160px;
  padding: 5px;
  margin: 5px;
`;

const CharName = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const CharPicture = styled.figure`
  margin: 0;
  overflow: hidden;
  width: 150px;
  height: 200px;

  img {
    width: 150px;
    height: 200px;
    margin: 0 -25px 0 -25px;
    object-fit: cover;
  }
`;

const Character = ({ name, picture = "" }) => (
  <Container>
    <CharName>
      <p>{name}</p>
    </CharName>
    <CharPicture>
      <img src={picture} alt={name} />
    </CharPicture>
  </Container>
);

export default Character;
