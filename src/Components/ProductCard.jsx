import React from "react";

const ProductCard = ({ product, products }) => {
  const { _id, name, brand, type, price, description, rating, photo } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{brand}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
