import React from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => (
  <div className='content-container'>
    <NavLink className='footer__title' to='/' />
    <h2 className='footer-lo__title'> Keith Robinson </h2>
    <p className='footer-lo__subtitle'>JavaScript Programming</p>
    <p className='footer-lo__subtitle'>Maple Grove, Minnesota</p>
  </div>
);

export default ContactPage;
