import React from "react";
import Commitment from "../components/about-components/Commitment";
import Headquaters from "../components/about-components/Headquaters";
import Quality from "../components/about-components/Quality";
import Herobanner from "../components/Herobanner";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Socialmedias from "../components/Socialmedias";

const About = () => {
  return (
    <div>
      <header className="header">
        <Logo link={"/"} header={"header"} />
        <Navigation />
      </header>
      <main>
        <section className="herobanner about-herobanner">
          <Herobanner
            title={"About Us"}
            text={
              "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
            }
          />
        </section>
        <Commitment />
        <Quality />
        <Headquaters />
      </main>
      <footer className="footer">
        <div className="footer-left">
          <Logo link={"/"} footer={"footer"} />
          <Navigation />
        </div>
        <div className="footer-right">
          <Socialmedias />
        </div>
      </footer>
    </div>
  );
};

export default About;
