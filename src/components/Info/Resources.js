import React from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => (
  <div className='content-container'>
    <NavLink className='footer__title' to='/' />
    <h2 className='footer-lo__title'> Never know enough </h2>
    <p className='footer-lo__subtitle'>
      Special thanks to Kyle Simpson, Will Sentence, and FrontEnd Masters
    </p>
    <p className='footer-lo__subtitle'>Still Learning</p>
  </div>
);

export default ContactPage;
