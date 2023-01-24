import React from "react";

const Card = ({ title, description, price, coverImg, location, openSpots }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
      <p>Open spots: {openSpots}</p>
    </div>
  );
};

export default Card;
