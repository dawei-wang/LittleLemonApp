import React from "react";
import Card from "./Card";
import seafood from "./Seafood.png";
import brushetta from "./Brushetta.png";
import stirFry from "./StirFry.png";

const images = {
  seafood,
  brushetta,
  stirFry,
};

const cardData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
    image: stirFry,
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$16.99",
    description:
      "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
    image: brushetta,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$8.50",
    description:
      "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
    image: seafood,
  },
];

const CardList = () => {
  return (
    <section className="specials-cards">
      {cardData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          price={card.price}
          description={card.description}
          image={images[card.image]}
        />
      ))}
    </section>
  );
};

export default CardList;
