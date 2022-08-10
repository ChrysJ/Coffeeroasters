import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import Herobanner from "../components/Herobanner";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Socialmedias from "../components/Socialmedias";
import Createplan from "../components/subscribe-components/Createplan";
import Userplan from "../components/subscribe-components/Userplan";
import Works from "../components/Works";

const Subscribe = () => {
  const [firstWord, setFirstWord] = useState("...");
  const [secondWord, setSecondWord] = useState("...");
  const [thirdWord, setThirdWord] = useState("...");
  const [fourthWord, setFourthWord] = useState("...");
  const [fifthWord, setFifthWord] = useState("...");

  const paragraph1 = <span className="word">{firstWord}</span>;
  const paragraph2 = <span className="word">{secondWord}</span>;
  const paragraph3 = <span className="word">{thirdWord}</span>;
  const paragraph4 = <span className="word">{fourthWord}</span>;
  const paragraph5 = <span className="word">{fifthWord}</span>;

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
        <section className="section-createplan">
          <div></div>
          <div>
            <Createplan
              radioName={"preferences"}
              choiceNumber={[0]}
              setWord={setFirstWord}
            />
            <Createplan
              radioName={"coffeetype"}
              choiceNumber={[1]}
              setWord={setSecondWord}
            />
            <Createplan
              radioName={"quantity"}
              choiceNumber={[2]}
              setWord={setThirdWord}
            />
            <Createplan
              radioName={"coffeemachine"}
              choiceNumber={[3]}
              setWord={setFourthWord}
            />
            <Createplan
              radioName={"delivery"}
              choiceNumber={[4]}
              setWord={setFifthWord}
            />
            <Userplan
              paragraph1={paragraph1}
              paragraph2={paragraph2}
              paragraph3={paragraph3}
              paragraph4={paragraph4}
              paragraph5={paragraph5}
            />
            <Button link={"/"} textContent={"Create your plan"} />
          </div>
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
