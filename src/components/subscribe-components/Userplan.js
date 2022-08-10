import React from "react";

const Userplan = ({
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
}) => {
  return (
    <div className="paragraph-plan">
      <span className="order-summary">order summary</span>
      <p>
        “I drink my coffe Using {paragraph1}, with a {paragraph2} type of bean.
        {paragraph3} ground ala {paragraph4}, sent to me {paragraph5}.“
      </p>
    </div>
  );
};

export default Userplan;
