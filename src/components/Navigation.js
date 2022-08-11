import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
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
    </nav>
  );
};

export default Navigation;
