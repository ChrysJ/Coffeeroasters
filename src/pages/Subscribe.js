import React from "react";
import Herobanner from "../components/Herobanner";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Socialmedias from "../components/Socialmedias";
import Works from "../components/Works";

const Subscribe = () => {
  return (
    <div>
      <header className="header">
        <Logo link={"/"} header={"header"} />
        <Navigation />
      </header>
      <main>
        <section className="herobanner subscribe-herobanner">
          <Herobanner
            title={"Create plan"}
            text={
              "Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
            }
          />
        </section>
        <section className="section-stepper">
        <Works />
        </section>
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

export default Subscribe;
