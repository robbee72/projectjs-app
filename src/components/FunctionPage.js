import React from "react";
import { NavLink } from "react-router-dom";

const FunctionPage = () => (
  <div className='box-lo'>
    <div className='box-lo__box'>
      <div className='content-container'>
        <NavLink className='header__title' to='/' />
        <h1 className='box-lo__title'>What are functions?</h1>
        <p className='box-lo__title'>Three types of functions</p>
      </div>
      <NavLink
        className='header__title'
        to='/function'
        activeClassName='is-active'
      >
        <li>Named Functions </li>
        <li>Function expression</li>
        <li>Arrow Function </li>
      </NavLink>
    </div>
  </div>
);
export default FunctionPage;
