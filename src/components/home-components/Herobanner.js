import React from "react";
import Button from "../Button";

const Herobanner = () => {
  return (
    <section className="home-herobanner">
      <div>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button link={"subscribe"} textContent={"Create your plan"} />
      </div>
    </section>
  );
};

export default Herobanner;
