import React, { Component } from "react";
import ReactDOM from "react-dom";
import HOCCOmp from "./hoc";

import "./styles.css";

class App extends Component {
  handleClick(Wrapper) {
    return class SomeComp extends Component {
      render() {
        return (
          <div>
            <Wrapper />
          </div>
        );
      }
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={e => this.handleClick(HOCCOmp)}>
          Click and Get ME
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
