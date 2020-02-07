import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='content-container'>
          <div className='header__content'>
            <h1 className='header__title'> JavaScript </h1>
            <div>
              <ul>
                <li>
                  <NavLink to='/landing' activeClassName='is-active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/function' activeClassName='is-active'>
                    JS
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/cascade' activeClassName='is-active'>
                    CSS
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/hypertext' activeClassName='is-active'>
                    HTML
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/hook' activeClassName='is-active'>
                    HOOKS
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/python' activeClassName='is-active'>
                    PYTHON
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
