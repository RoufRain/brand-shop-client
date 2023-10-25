import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const loadedProducts = useLoaderData();

  return (
    <div>
      <h1>loaded products: {loadedProducts.length}</h1>

      <div className="grid  lg:grid-cols-2 gap-5 m-3">
        {loadedProducts.map((product) => (
          <ProductCard
            key={product.brand}
            product={product}
            products={loadedProducts}
          >
            {" "}
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
