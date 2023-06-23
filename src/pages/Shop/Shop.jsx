import PageHeading from "../../components/PageHeading/PageHeading";
import ProductList from "../../components/ProductList/ProductList";

const Shop = () => {
  return (
    <div className="container mb-32">
      <PageHeading currentPage="Shop" />
      <ProductList />
    </div>
  );
};
export default Shop;
