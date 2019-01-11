import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class HOCCOmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChild: "Sandbox"
    };
  }
  handleClick(e) {
    console.dir(e);
  }
  render() {
    return (
      <div className="App">
        <button onClick={e => this.handleClick(e)}>Click ME</button>
        {this.state.displayChild}
      </div>
    );
  }
}
