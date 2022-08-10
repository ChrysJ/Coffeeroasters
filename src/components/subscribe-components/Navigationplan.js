import React from "react";

const Navigationplan = ({
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord,
}) => {
  if (firstWord !== "...") {
    const firstChoice = document.querySelector(".firstchoice");
    firstChoice.style.opacity = "0.4";
  }
  if (secondWord !== "...") {
    const secondChoice = document.querySelector(".secondchoice");
    secondChoice.style.opacity = "0.4";
  }
  if (thirdWord !== "...") {
    const thirdChoice = document.querySelector(".thirdchoice");
    thirdChoice.style.opacity = "0.4";
  }
  if (fourthWord !== "...") {
    const firstChoice = document.querySelector(".fourthchoice");
    firstChoice.style.opacity = "0.4";
  }
  if (fifthWord !== "...") {
    const firstChoice = document.querySelector(".fifthchoice");
    firstChoice.style.opacity = "0.4";
  }

  return (
    <div className="navigation-plan">
      <ul>
        <li>
          <a href="#tofirstchoice">
            <button className="firstchoice">
              <span className="navigation-plan-number">01</span>
              <span> Preferences</span>
            </button>
          </a>
        </li>
        <li>
          <a href="#tosecondchoice">
            <button className="secondchoice">
              <span className="navigation-plan-number">02</span>
              <span>Bean Type</span>
            </button>
          </a>
        </li>
        <li>
          <a href="#tothirdchoice">
            <button className="thirdchoice">
              <span className="navigation-plan-number">03</span>
              <span>Quantity</span>
            </button>
          </a>
        </li>
        <li>
          <a href="#tofourthchoice">
            <button className="fourthchoice">
              <span className="navigation-plan-number">04</span>
              <span>Grind Option</span>
            </button>
          </a>
        </li>
        <li>
          <a href="#tofifthchoice">
            <button className="fifthchoice">
              <span className="navigation-plan-number">05</span>
              <span>Deliveries</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigationplan;
