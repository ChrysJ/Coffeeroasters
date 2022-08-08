import React, { useState } from "react";
import { dataCollection } from "../../data/Collectiondata";

const Ourcollection = () => {
  const [Collection] = useState(dataCollection);

  return (
    <section className="section-collection">
      <div className="title-collection">
        <h2>Our collection</h2>
      </div>
      <div className="collection">
        {Collection.map((item) => (
          <div className="item-collection">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourcollection;
