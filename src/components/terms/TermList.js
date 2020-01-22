import React, { Component } from "react";
import TermData from "../data/jsterm.json";

class TermList extends Component {
  render() {
    return (
      <div>
        <h2>Javascript Terms</h2>
        {TermData.map(termDetail => {
          return (
            <div key={(termDetail.title, termDetail.content)}>
              <h5>{termDetail.title}-</h5>
              <p>{termDetail.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TermList;
