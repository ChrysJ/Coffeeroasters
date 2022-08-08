import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>about us</li>
        </NavLink>
        <NavLink
          to="/subscribe"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>create your plan</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
