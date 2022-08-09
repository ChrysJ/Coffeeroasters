import React from "react";
import Button from "./Button";

const Herobanner = ({ title, text, homepage }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      { homepage && (<Button link={"subscribe"} textContent={"Create your plan"} />)}
    </div>
  );
};

export default Herobanner;
