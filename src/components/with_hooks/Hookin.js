import React, { Component } from "react";
import Header from "./Header";
import Hook from "./Hook";
import Traditional from "./Traditional";

import "./hook.css";

class Hookin extends Component {
  render() {
    return (
      <div className='box-lo'>
        <div className='hook-Header'>
          <Header />
          <div className='hook-Hook'>
            <Hook />
          </div>
          <div className='hook-Example'>
            <hr />
            <Traditional />
          </div>
        </div>
      </div>
    );
  }
}

export default Hookin;
