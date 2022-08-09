import React from "react";
import { useState } from "react";
import { dataQualityServices } from "../../data/qualityServicesData";

const Chooseus = () => {
  const [qualitysServices] = useState(dataQualityServices);
  return (
    <section className="section-quality">
      <div>
        <h4>Why choose us ?</h4>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="quality-services">
          {qualitysServices.map((services) => (
            <div className="services" key={services.title}>
              <img src={services.img} alt="" />
              <h3>{services.title}</h3>
              <p>{services.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
