import React from "react";
import CardTemplate from "../template/CardTemplate";

const Shop = ({ title, image, price, desc, icon }) => {
  return (
    <CardTemplate className="shop-items">
      <div className="item flex flex-col gap-y-2 text-start">
        <img src={image} alt={title} />
        <div className="item-name-price flex justify-between items-center">
          <h4 className="font-semibold">{title}</h4>
          <span className="bg-ColorYellow py-1 px-2 font-semibold rounded-2xl">{price}</span>
        </div>
        <p>{desc}</p>
        <img src={icon} alt="rating" className="w-24" />
      </div>
    </CardTemplate>
  );
};

export default Shop;
