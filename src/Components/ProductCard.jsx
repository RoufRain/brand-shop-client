import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, products }) => {
  const { _id, name, brand, type, price, description, rating, photo } = product;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="h-80 w-full" src={photo} />
      </figure>
      <div className="card-body text-lg">
        <h5 className="card-title">Name: {name}</h5>
        <h5 className="">Brand: {brand}</h5>
        <h5 className="">Type: {type}</h5>
        <h5 className="">$Price: {price}</h5>
        <h5 className="">Rating: {rating}</h5>
        <h5 className="">{description}</h5>
      </div>
      <div className="flex justify-around  ">
        {/* ///CardDetails/${id} */}
        <Link to={`/productDetails/${_id}`}>
          <button className=" btn btn-primary">See Details</button>
        </Link>{" "}
        <button className="btn btn-secondary">Update</button>
      </div>
    </div>
  );
};

export default ProductCard;
