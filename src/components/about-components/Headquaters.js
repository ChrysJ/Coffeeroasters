import React, { useState } from "react";
import { dataHeadquaters } from "../../data/headquatersData";

const Headquaters = () => {
  const [allHeadquaters] = useState(dataHeadquaters);

  return (
    <section className="headquaters-section">
      <h5>Our headquaters</h5>
      <div className="all-headquaters">
        {allHeadquaters.map((headquaters) => (
          <div key={headquaters.title} className="headquaters">
            <img src={headquaters.img} alt={headquaters.title} />
            <h3>{headquaters.title}</h3>
            <p>{headquaters.address}</p>
            <p>{headquaters.city}</p>
            <p>{headquaters.postalcode}</p>
            <p>{headquaters.phonenumber}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Headquaters;
