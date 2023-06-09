import { useState } from "react";
import wrinkle_featured from "../../assets/product_images/deep anti weinkle/featured.png";
import skin_featured from "../../assets/product_images/skin care/featured.png";

import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
const Cart = ({ open, handleOpen }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Anti-Wrinkle Cream",
      short_description:
        "LANOCARE anti-wrinkle cream is a strong moisturizer which hydrates the skin and nourishes and soothes tired skin. Among the actives used in the formula of this product are the following: Peptide syn-ake This peptide, produced by the PENTA PHARMA Swiss Company, is a new and efficient compound with the same effect as Botox, which, in addition to inhibiting muscle contraction, makes wrinkles smooth. Pepha-tight CB This substance has an immediate lifting effect, and also brings a permanent and stable effect after continuous use. Smoother skin, reduction of wrinkles and uniform skin texture are also other benefits of this substance. Usable For: Facial and neck skin Suitable for normal to dry and very dry skin",
      price: 399,
      feature_image: wrinkle_featured,
      count: 1,
    },
    {
      id: 2,
      name: "Skin Care",
      description:
        "Skin care is very important. LANOCARE body lotion, while providing powerful hydration together with fast absorption and providing a soft and light texture and deep penetration into the skin, increases transparency and freshness of the skin and prevents dryness. Besides regenerating and revitalizing the skin, this product also helps relieve itching and skin inflammation. It also has an attractive and long-lasting scent and does not contain parabens. LANOCARE body lotion soothes sensitive and inflamed skin and minimizes the feeling of stretching caused by dry skin. This lotion has many benefits with its unique",
      price: 220,
      feature_image: skin_featured,
      count: 1,
    },
  ]);

  const totalProductPrice = products.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  const handleIncrease = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts((prev) => {
      const newProducts = prev.map((product) =>
        product.id === id ? { ...product, count: product.count - 1 } : product
      );
      return newProducts.filter((product) => product.count !== 0);
    });
  };
  const handleCartOpen = () => {
    handleOpen();
  };
  return (
    <div
      className={`w-full z-10 fixed h-screen top-0 left-0 ${!open && "hidden"}`}
    >
      <div className="flex h-screen">
        <div className=" flex flex-col justify-between w-[60%] md:w-[40%] lg:w-[20%] text-black bg-white h-full p-10">
          <div className="flex relative items-center justify-between">
            <h2>Shopping Cart</h2>
            <h3>items - {products.length}</h3>
            <div className="absolute -top-8 -right-8 cursor-pointer">
              <IoMdClose size={22} onClick={() => handleCartOpen()} />
            </div>
          </div>
          <hr className="mt-10" />
          <div className="overflow-scroll h-[600px]">
            {products.map((product) => (
              <div key={product.id} className="flex items-center gap-5 mt-10">
                <div className="w-1/3">
                  <img src={product.feature_image} alt={product.name} />
                </div>
                <div className="w-3/4">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className="flex items center justify-between">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="border w-2 h-2 flex items-center justify-center p-2 rounded-full"
                        onClick={() => handleDecrease(product.id)}
                      >
                        -
                      </button>
                      {product.count}
                      <button
                        className="border w-2 h-2 flex items-center justify-center p-2 rounded-full"
                        onClick={() => handleIncrease(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <div>price: {product.price} $</div>
                    <div className="text-primary font-semibold">
                      {product.price * product.count} $
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="mt-10" />
          <div className="flex items-center justify-between text-2xl font-bold mt-10">
            <h2>Total Price: </h2>
            <h2>{totalProductPrice} $</h2>
          </div>
          <hr className="mt-10" />
          <div className="flex items-center justify-between gap-3 mt-10">
            <div className="w-full">
              <Button primary="primary" fullWidth="fullWidth">
                CheckOut
              </Button>
            </div>
            <div className="w-full">
              <Button fullWidth="fullWidth">View Cart</Button>
            </div>
          </div>
        </div>
        <div
          className="text-white bg-black/40 w-[40%] md:w-[60%] lg:w-[80%]"
          onClick={() => handleCartOpen()}
        ></div>
      </div>
    </div>
  );
};
export default Cart;
