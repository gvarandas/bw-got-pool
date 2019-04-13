import React, { Component } from "react";
import { css, Global } from "@emotion/core";
import { Router } from "@reach/router";

import Header from "./components/Header";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

const CSS = () => (
  <Global
    styles={css`
      * {
        text-align: center;
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: #f6f6f6;
        font-family: "Roboto", "Fira Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    `}
  />
);

class App extends Component {
  render() {
    return (
      <>
        <CSS />
        <div className="App">
          <Header />
          <main>
            <Router>
              <HomePage path="/" />
              <DetailPage path="/:username" />
            </Router>
          </main>
        </div>
      </>
    );
  }
}

export default App;
