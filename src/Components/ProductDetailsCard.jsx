import React from "react";

const ProductDetailsCard = (product, products) => {
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
      <div className="flex justify-around">
        {/* ///CardDetails/${id} */}

        {/* <div>
              <Link to={`/productDetails/${_id}`}>
                <div className="relative">
                  <button className=" absolute bottom-4 right-2 h-8 w-28 border bg-sky-500  rounded-md text-[white]">
                    See Details
                  </button>
                </div>
              </Link>{" "}
            </div> */}
        {/* <button className="btn btn-secondary">Update</button> */}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
