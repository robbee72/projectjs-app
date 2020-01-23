import React, { Component } from "react";
import TermData from "../data/jsterm.json";

const tStyle = {
  color: "black",
  fontSize: "20px",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "center",
};

const hStyle = {
  color: "black",
  fontSize: "16px",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "left",
};

const pStyle = {
  color: "black",
  fontSize: "10px",
  fontWeight: "bold",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "left",
  textIndent: "2em",
};

class TermList extends Component {
  render() {
    return (
      <div>
        <h2 style={tStyle}>Javascript Terms</h2>
        <br />
        {TermData.map(termDetail => {
          return (
            <div key={(termDetail.title, termDetail.content)}>
              <h3 style={hStyle}>{termDetail.title}</h3>
              <h5 style={pStyle}>{termDetail.content}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TermList;
