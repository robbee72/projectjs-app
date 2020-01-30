import React from "react";
import { NavLink } from "react-router-dom";

const CascadePage = () => (
  <div className='box-lo'>
    <div className='box-lo__box'>
      <div className='content-container'>
        <NavLink className='header__title' to='/' />
        <h1 className='box-lo__title'>Styling</h1>
        <p className='box-lo__title'>css file</p>
      </div>
      <NavLink
        className='header__title'
        to='/cascade'
        activeClassName='is-active'
      >
        <li>.css</li>
      </NavLink>
    </div>
  </div>
);
export default CascadePage;
