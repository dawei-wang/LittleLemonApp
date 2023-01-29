import React from "react";
import seafood from "./Seafood.png";
import brushetta from "./Brushetta.png";
import stirFry from "./StirFry.png";

const images = {
  seafood,
  brushetta,
  stirFry,
};

const Card = ({ title, description, price, coverImg, location, openSpots }) => {
  const image = images[coverImg];
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
      <p>Open spots: {openSpots}</p>
    </div>
  );
};

export default Card;
