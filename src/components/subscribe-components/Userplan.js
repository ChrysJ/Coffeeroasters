import React from "react";

const Userplan = ({ userPlanCreated }) => {
  return (
    <div className="paragraph-plan">
      <span className="order-summary">order summary</span>
      {userPlanCreated}
    </div>
  );
};

export default Userplan;
