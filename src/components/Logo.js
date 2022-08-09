import React from "react";
import logoHeader from "../style/assets/img/shared/logo.svg";
import logoFooter from "../style/assets/img/shared/logo-footer.svg";
import { NavLink } from "react-router-dom";

const Logo = ({ header, footer, link }) => {
  return (
    <div className="header-logo">
      {header && (
        <NavLink to={link}>
          <img src={logoHeader} alt="ceci est mon logo"></img>
        </NavLink>
      )}
      {footer && (
        <NavLink to={link}>
          <img src={logoFooter} alt="ceci est mon logo"></img> 
        </NavLink>
      )}
    </div>
  );
};

export default Logo;
