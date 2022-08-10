import React from "react";
import { useState } from "react";
import Herobanner from "../components/Herobanner";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Socialmedias from "../components/Socialmedias";
import Btncreateplan from "../components/subscribe-components/Modalcheckout";
import Createplan from "../components/subscribe-components/Createplan";
import Navigationplan from "../components/subscribe-components/Navigationplan";
import Userplan from "../components/subscribe-components/Userplan";
import Works from "../components/Worksstepper";

const Subscribe = () => {
  // Paragraphe création du plan
  // Création des mots du paragraphe
  const [firstWord, setFirstWord] = useState("...");
  const [secondWord, setSecondWord] = useState("...");
  const [thirdWord, setThirdWord] = useState("...");
  const [fourthWord, setFourthWord] = useState("...");
  const [fifthWord, setFifthWord] = useState("...");

  // Création des spans pour modifier le style des mots du paragraphe
  const paragraph1 = <span className="word">{firstWord}</span>;
  const paragraph2 = <span className="word">{secondWord}</span>;
  const paragraph3 = <span className="word">{thirdWord}</span>;
  const paragraph4 = <span className="word">{fourthWord}</span>;
  const paragraph5 = <span className="word">{fifthWord}</span>;

  // Stockage du paragraphe dans une variable
  const userPlanCreated = (
    <p>
      “I drink my coffe Using {paragraph1}, with a {paragraph2} type of bean.
      {paragraph3} ground ala {paragraph4}, sent to me {paragraph5}.“
    </p>
  );
  //
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
          <Navigationplan
            firstWord={firstWord}
            secondWord={secondWord}
            thirdWord={thirdWord}
            fourthWord={fourthWord}
            fifthWord={fifthWord}
          />
          <div>
            <Createplan
              titleChoice={"How do you drink your coffee?"}
              id={"tofirstchoice"}
              radioName={"preferences"}
              choiceNumber={[0]}
              setWord={setFirstWord}
            />
            <Createplan
              titleChoice={"What type of coffee?"}
              id={"tosecondchoice"}
              radioName={"coffeetype"}
              choiceNumber={[1]}
              setWord={setSecondWord}
            />
            <Createplan
              titleChoice={"How much would you like?"}
              id={"tothirdchoice"}
              radioName={"quantity"}
              choiceNumber={[2]}
              setWord={setThirdWord}
            />
            <Createplan
              titleChoice={"Want us to grind them?"}
              id={"tofourthchoice"}
              radioName={"coffeemachine"}
              choiceNumber={[3]}
              setWord={setFourthWord}
            />
            <Createplan
              titleChoice={"How often should we deliver?"}
              id={"tofifthchoice"}
              radioName={"delivery"}
              choiceNumber={[4]}
              setWord={setFifthWord}
            />
            <Userplan userPlanCreated={userPlanCreated} />
            <Btncreateplan
              firstWord={firstWord}
              secondWord={secondWord}
              thirdWord={thirdWord}
              fourthWord={fourthWord}
              fifthWord={fifthWord}
              userPlanCreated={userPlanCreated}
            />
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
