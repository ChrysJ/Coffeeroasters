import React from "react";
import { useState } from "react";
import { dataChoice } from "../../data/choiceData";

const Createplan = ({ setWord, choiceNumber, radioName, titleChoice, id }) => {
  const [currentChoice] = useState(dataChoice[choiceNumber]);

  return (
    <div>
      <h2 id={id}>{titleChoice}</h2>
      <div className="create-plan">
        {currentChoice.map((userChoice, index) => (
          <div className="choice" key={index}>
            <input
              type="radio"
              id={userChoice.choice}
              name={radioName}
              onChange={() => setWord(userChoice.title)}
            />
            <label htmlFor={userChoice.choice}>
              <h4>{userChoice.title}</h4>
              <p>{userChoice.text}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Createplan;
