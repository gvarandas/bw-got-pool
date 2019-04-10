import React, { useState } from "react";
import styled from "@emotion/styled";
import CharButton from "./CharButton";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 260px;
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

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom-left-radius: 2.5%;
    border-bottom-right-radius: 2.5%;
  }
`;

const ButtonContainer = styled.div(({ visible }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  margin: "-60%",
  opacity: visible ? 1 : 0,
  transition: "0.3s",
  zIndex: 2
}));

const DestinyOverlay = styled.div(({ state }) => {
  const baseStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    borderRadius: "2.5%"
  };
  let destinyStyle = {};

  switch (state) {
    case "Alive":
      destinyStyle = { backgroundColor: "rgba(145, 198, 139, 0.5)" };
      break;
    case "Dead":
      destinyStyle = { backgroundColor: "rgba(0, 0, 0, 0.5)" };
      break;
    case "Wight":
      destinyStyle = { backgroundColor: "rgba(44, 108, 211, 0.5)" };
      break;
    case "Throne":
      destinyStyle = { backgroundColor: "rgba(255,215,0, 0.5)" };
      break;
    default:
      destinyStyle = { backgroundColor: "transparent" };
  }

  return {
    ...baseStyle,
    ...destinyStyle
  };
});

const Character = ({ name, picture = "" }) => {
  const [hover, setHover] = useState(false);
  const [destiny, setDestiny] = useState("");

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <DestinyOverlay state={destiny} />
      <CharName>
        <p>{name}</p>
      </CharName>
      <CharPicture>
        <img src={picture} alt={name} />
      </CharPicture>
      <ButtonContainer visible={hover}>
        <CharButton
          name="💪"
          label="Alive"
          onClick={() => setDestiny("Alive")}
        />
        <CharButton name="💀" label="Dead" onClick={() => setDestiny("Dead")} />
        <CharButton
          name="🧟‍♂️"
          label="Wight"
          onClick={() => setDestiny("Wight")}
        />
        <CharButton
          name="👑"
          label="Throne"
          onClick={() => setDestiny("Throne")}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Character;
