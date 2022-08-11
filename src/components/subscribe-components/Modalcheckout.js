import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Modalcheckout = ({
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord,
  userPlanCreated,
}) => {
  // State
  const [pricePlan, setPricePlan] = useState("0");
  const btnCreatePlan = useRef();
  const modalCheckout = useRef();
  // Comportement
  //   Controle empty choice
  if (
    firstWord !== "..." &&
    secondWord !== "..." &&
    thirdWord !== "..." &&
    fourthWord !== "..." &&
    fifthWord !== "..."
  ) {
    btnCreatePlan.current.classList.remove("disabled");
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

  const handleClick = () => {
    if (btnCreatePlan.current.classList.contains("disabled")) {
      alert("Veuillez indiquer vos préférences");
    } else {
      priceUserPlan();
      //   Affichage de la modale
      modalCheckout.current.style.visibility = "visible";
    }
  };

  const modalHidden = () => {
    modalCheckout.current.style.visibility = "hidden";
  };

  //
  return (
    <div className="container-btn-createplan">
      <button
        ref={btnCreatePlan}
        onClick={handleClick}
        className="btn disabled"
      >
        <span>Create my plan!</span>
      </button>

      <div ref={modalCheckout} className="modal-order-summary">
        <div className="modal-content">
          <div className="modal-title">
            <h5>Order Summary</h5>
            <i className="fa-solid fa-xmark" onClick={() => modalHidden()}></i>
          </div>
          <div className="modal-checkout">
            <div className="paragraph-plan">
            {userPlanCreated}
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

export default Modalcheckout;
