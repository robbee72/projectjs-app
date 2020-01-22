import React from "react";
import { NavLink } from "react-router-dom";

const HyperTextPage = () => (
  <div className='box-lo__shop'>
    <div className='box-lo__box'>
      <div className='content-container'>
        <NavLink className='header__title' to='/' />
        <h1 className='box-lo__title'>HMTL</h1>
        <p className='box-lo__title'>Hyper Text Markup Language</p>
      </div>
      <NavLink
        className='header__title'
        to='/hypertextpage'
        activeClassName='is-active'
      ></NavLink>
    </div>
  </div>
);
export default HyperTextPage;
