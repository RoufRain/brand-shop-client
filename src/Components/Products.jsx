import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const loadedProducts = useLoaderData();

  return (
    <div>
      <h1>loaded products: {loadedProducts.length}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
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
