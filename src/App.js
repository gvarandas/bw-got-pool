import React, { Component } from "react";
import "./App.css";

import charactersInfo from "./characters";
import CharacterGrade from "./components/CharacterGrade";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <CharacterGrade charactersInfo={charactersInfo} />
        </main>
      </div>
    );
  }
}

export default App;
