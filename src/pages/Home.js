import React from "react";
import Chooseus from "../components/home-components/Qualityservices";
import Herobanner from "../components/Herobanner";
import Ourcollection from "../components/home-components/Ourcollection";
import Works from "../components/Works";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Socialmedias from "../components/Socialmedias";

const Home = () => {
  return (
    <div>
      <header className="header">
        <Logo link={"/"} header={"header"} />
        <Navigation />
      </header>
      <main>
        <section className="herobanner home-herobanner">
          <Herobanner
            title={"Great coffee made simple."}
            text={
              "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
            }
            homepage={"homepage"}
          />
        </section>
        <Ourcollection />
        <Chooseus />
        <section className="section-works">
          <h5>How it works</h5>
          <Works />
          <Button link={"subscribe"} textContent={"Create your plan"} />
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

export default Home;
