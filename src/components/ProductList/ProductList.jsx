import { Products } from "../../api/Products";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ slice }) => {
  return (
    <div className="container ">
      {slice < 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
          {Products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Products.map((item) => (
            <ProductCard key={item.id} item={item} />
          )).slice(0, slice)}
        </div>
      )}
    </div>
  );
};
export default ProductList;
