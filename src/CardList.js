import React from "react";
import menuData from "./data";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      {menuData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          coverImg={item.coverImg}
          location={item.location}
          openSpots={item.openSpots}
        />
      ))}
    </div>
  );
};

export default CardList;
