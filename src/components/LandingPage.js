import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import AccordMenu from "../components/AccordMenu";

const LandingPage = () => (
  <div className='box-lo'>
    <div className='content__content'>
      <NavLink className='header__title' to='/' />

      <div className='card'>
        <div className='card__content'>
          <div className='card__front'>
            <h5 className='card__title'>JavaScript</h5>

            <p className='card__subtitle'>
              The deep dark world of programming in ReactJS.
            </p>
          </div>

          <div className='card__back'>
            <p className='card__body'>
              I have been told a million times to be reasonable. To be comfort.
              To follow the rules. Yet only unreasonable men change things” --
              unknown
            </p>
          </div>
        </div>
        <AccordMenu />
      </div>
    </div>
    <Footer />
  </div>
);

export default LandingPage;
