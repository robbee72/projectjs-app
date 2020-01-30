import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404 -
    <NavLink to='/'>
      <h4>Go home</h4>
    </NavLink>
  </div>
);

export default NotFoundPage;
