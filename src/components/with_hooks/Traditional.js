import React, { Component } from "react";

class Traditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null, // or 0
    };
  }

  render() {
    return (
      <div className='hook'>
        <h4> WithOUT Hooks </h4>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <hr />
        <small>Traditional react class.</small>
        <small>Constructor with super props & this.state </small>
      </div>
    );
  }
}

export default Traditional;
