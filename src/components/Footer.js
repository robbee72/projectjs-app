import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className='footer'>
    <div className='page-container'>
      <div className='footer__content'>
        <div>
          <ul>
            <li>
              <NavLink to='/about' activeClassName='is-active'>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='is-active'>
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to='/resources' activeClassName='is-active'>
                RESOURCES
              </NavLink>
            </li>
          </ul>
        </div>
        <h5>Designed and Coded by Keith Robinson </h5>
        <h5>copyright 2020</h5>
      </div>
    </div>
  </footer>
);

export default Footer;
