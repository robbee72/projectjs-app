import React, { Component } from "react";
import TermList from "./terms/TermList";

class Terms extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>Terms Dictionary</header>

        <TermList />
      </div>
    );
  }
}

export default Terms;
