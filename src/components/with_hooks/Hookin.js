import React, { Component } from "react";
import Header from "./Header";
import Hook from "./Hook";
import Traditional from "./Traditional";

import "./hook.css";

class Hookin extends Component {
  render() {
    return (
      <div className='content-container'>
        <div className='box-lo'>
          <div className='hook-Header'>
            <Header />
            <div className='hook-Hook'>
              <Hook />
            </div>
            <br />
            <div className='hook-Example'>
              <Traditional />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hookin;
