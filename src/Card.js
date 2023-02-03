import React from "react";

const Card = ({ name, price, description, image }) => {
  return (
    <div className="specials-card">
      <img src={image} alt="specials" />
      <h3 className="specials-card-name">{name}</h3>
      <h4 className="specials-card-price">{price}</h4>
      <p className="specials-card-description">{description}</p>
    </div>
  );
};

export default Card;
