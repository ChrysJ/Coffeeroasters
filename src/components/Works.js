import React from "react";
import { useState } from "react";
import { workData } from "../data/workData";

const Works = () => {
  const [workStep] = useState(workData);

  return (
    <div className="how-it-works" >
      <div className="subscribe steper">
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
      </div>
      <div className="workStep">
        {workStep.map((step) => (
          <div className="step" key={step.title}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
