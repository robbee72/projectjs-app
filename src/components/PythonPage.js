import React from "react";
import { NavLink } from "react-router-dom";

const PythonPage = () => (
  <div className='box-lo'>
    <div className='content__content'>
      <div className='box-lo__box'>
        <div className='content-container'>
          <NavLink className='header__title' to='/' />
          <h1 className='box-lo__title'>Python</h1>
          <p className='box-lo__title'>Python conditional</p>
        </div>
        <NavLink
          className='header__title'
          to='/python'
          activeClassName='is-active'
        ></NavLink>
      </div>
    </div>
  </div>
);
export default PythonPage;
