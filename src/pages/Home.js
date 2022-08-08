import React from "react";
import Chooseus from "../components/home-components/Chooseus";
import Herobanner from "../components/home-components/Herobanner";
import Ourcollection from "../components/home-components/Ourcollection";
import Works from "../components/home-components/Works";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Navigation />
      </header>
      <main>
        <Herobanner />
        <Ourcollection />
        <Chooseus />
        <section className="section-works">
          <h5>How it works</h5>
          <Works />
        </section>
      </main>
    </div>
  );
};

export default Home;
