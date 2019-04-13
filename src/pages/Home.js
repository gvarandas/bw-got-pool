import React from "react";

import { CharactersProvider } from "../containers/CharacterContext";
import CharacterGrade from "../components/CharacterGrade";

const HomePage = () => (
  <CharactersProvider>
    <CharacterGrade />
  </CharactersProvider>
);

export default HomePage;
