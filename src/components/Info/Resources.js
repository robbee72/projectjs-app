import React from "react";
import { NavLink } from "react-router-dom";

const bStyle = {
  background: "#FFE582",
};

const pStyle = {
  color: "Red",
  font: "Arial",
  textIndent: "10px",
};

const ContactPage = () => (
  <header className='box-lo'>
    <div style={bStyle}>
      <NavLink className='footer__title' to='/' />
      <h2 className='footer-lo__title'>
        List of Resources Related to JavaScript
      </h2>
      <a href=' https://frontendmasters.com/'>
        <h3>Frontend Masters</h3>
      </a>
      <p style={pStyle}> JavaScript courses</p>
      <a href='https://github.com/getify'>
        <h3>GETIFY</h3>
      </a>
      <p style={pStyle}>Kyle Simpson's ebooks on JavaScript </p>
      <a href='https://developer.mozilla.org/en-US/'>
        <h3>MDN web docs</h3>
      </a>
      <p style={pStyle}>Every standard for JavaScript</p>
      <a href='https://stackoverflow.com/'>
        <h3>Stack Overflow</h3>
      </a>
      <p style={pStyle}>For developers, by developers open community</p>
    </div>
  </header>
);

export default ContactPage;
