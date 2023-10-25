import ProductDetailsCard from "./ProductDetailsCard";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedProducts = useLoaderData();

  return (
    <div>
      <h1>loaded products: {loadedProducts.length}</h1>

      <div className="grid  lg:grid-cols-2 gap-5 m-3">
        {loadedProducts.filter((productDetail) => (
          <ProductDetailsCard
            key={productDetail._id}
            product={productDetail}
            products={loadedProducts}
          >
            {" "}
          </ProductDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
