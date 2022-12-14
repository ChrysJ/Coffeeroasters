import React from "react";
import imgQuality from "../../style/assets/img/about/image-quality.jpg";

const Quality = () => {
  return (
    <div>
      <section className="quality-section">
        <div className="text-container">
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className="img-container">
          <img src={imgQuality} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Quality;
