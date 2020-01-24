// use of both .scss and inline styling.

import React, { Component } from "react";
import TermList from "./terms/TermList";

const termStyle = {
  margin: "10px",
  textAlign: "left",
  fontSize: "16px",
  fontFamily: "Calibri Light",
};
class Terms extends Component {
  render() {
    return (
      <div style={termStyle}>
        <header className='App-header'>Terms Dictionary</header>

        <TermList />
      </div>
    );
  }
}

export default Terms;
