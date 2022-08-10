import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

const Btncreateplan = ({
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord,
  userPlanCreated,
}) => {
  // State
  const [pricePlan, setPricePlan] = useState("0");
  // Comportement
  //   Controle empty choice
  if (
    firstWord !== "..." &&
    secondWord !== "..." &&
    thirdWord !== "..." &&
    fourthWord !== "..." &&
    fifthWord !== "..."
  ) {
    const btnCreatePlan = document.querySelector(".btn");
    btnCreatePlan.classList.remove("disabled");
  }
  //

  // SetPricePlan
  const priceUserPlan = () => {
    if (fifthWord === "Every week") {
      setPricePlan("$7.20 / mo");
    }
    if (fifthWord === "Every 2 weeks") {
      setPricePlan("$9.60 / mo");
    }
    if (fifthWord === "Every month") {
      setPricePlan("$12.00 / mo");
    }
  };
  //
  const handleClick = (e) => {
    if (e.currentTarget.classList.contains("disabled")) {
      alert("wshalors");
    } else {
      priceUserPlan();
      //   Affichage de la modale
    }
  };

  // Return
  return (
    <div className="container-btn-createplan">
      <button onClick={handleClick} className="btn disabled">
        <span>Create my plan!</span>
      </button>

      <div className="modal-order-summary">
        <div className="modal-content">
          <div className="modal-title">
            <h5>Order Summary</h5>
          </div>
          <div className="modal-checkout">
          <div className="paragraph-plan">
          <p>{userPlanCreated}</p>
          </div>
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className="modal-checkout-button">
              <span className="price-plan">{pricePlan}</span>
              <button className="btn">
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Btncreateplan;
