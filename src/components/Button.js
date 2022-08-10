import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ textContent, link }) => {
  return (
    <NavLink to={link}>
      <button className="btn">
        <span>{textContent}</span>
      </button>
    </NavLink>
  );
};

export default Button;
