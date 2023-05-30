import Button from "../../components/Button/Button";
const ProductCard = ({ item }) => {
  return (
    <div className=" flex flex-col gap-12 bg-black/30 p-4 rounded-lg m-3">
      <div className="overflow-hidden">
        <img
          src={item.feature_image}
          alt={item.name}
          className="bg-black rounded-lg hover:scale-110 duration-300 cursor-pointer w-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-primary font-bold text-2xl">{item.name}</h2>
        <h3 className="text-primary font-semibold">{`${item.price}$`}</h3>
      </div>
      <div className="flex gap-3 mb-6">
        <Button>Read More</Button>
        <Button primary="primary">Add To Cart</Button>
      </div>
    </div>
  );
};
export default ProductCard;
