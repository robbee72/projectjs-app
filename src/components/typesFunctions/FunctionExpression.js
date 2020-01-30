import React, { Component } from "react";

class FunctionExpression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null, // or 0
    };
  }

  render() {
    var namedFunction = function myFunc(theObject) {
      theObject.brand = "Taylor Made";
    };
    return (
      <div className='hook'>
        <h4>Named Function</h4>
        <p>{namedFunction}</p>
        <strong>the Object : Taylor Made</strong>
      </div>
    );
  }
}

export default FunctionExpression;
