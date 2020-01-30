import React from "react";
import { NavLink } from "react-router-dom";

class FunctionPage extends React.Component {
  render() {
    return (
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
            <ul>
              <button>
                <NavLink
                  to='/typesFunctions/namedFunction'
                  activeClassName='is-active'
                >
                  Named Functions
                </NavLink>
              </button>
            </ul>
            <ul>
              <button>
                <NavLink
                  to='/typesFunctions/functionExpression'
                  activeClassName='is-active'
                >
                  Function expression
                </NavLink>
              </button>
            </ul>
            <ul>
              <button>
                <NavLink
                  to='/typesFunctions/arrowFunction'
                  activeClassName='is-active'
                >
                  Arrow Function
                </NavLink>
              </button>
            </ul>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default FunctionPage;
