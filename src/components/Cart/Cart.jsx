import { useCart, useCartActions } from "../../context/Cart/CartProvider";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";

const Cart = ({ open, handleOpen }) => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const handleCartOpen = () => {
    handleOpen();
  };

  // const total = cart.reduce((acc, item) => {
  //   return acc + item.price * item.quantity;
  // }, 0);

  return (
    <div
      className={`w-full z-10 fixed h-screen top-0 left-0 ${!open && "hidden"}`}
    >
      <div className="flex h-screen">
        <div className=" flex flex-col justify-between w-[90%] sm:w-[100%] md:w-[80%] lg:w-[30%] text-black bg-white h-full p-10">
          <div className="flex relative items-center justify-between">
            <h2>Shopping Cart</h2>
            <h3>items - {cart.length}</h3>
            <div className="absolute -top-8 -right-8 cursor-pointer">
              <IoMdClose size={22} onClick={() => handleCartOpen()} />
            </div>
          </div>
          <hr className="mt-10" />
          <div className="overflow-scroll h-[600px]">
            {cart.map((product) => (
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
                        onClick={() =>
                          dispatch({
                            type: "DECREMENT_QUANTITY",
                            payload: product,
                          })
                        }
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        className="border w-2 h-2 flex items-center justify-center p-2 rounded-full"
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: product })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div>price: {product.price} $</div>
                    <div className="text-primary font-semibold">
                      {product.price * product.quantity} $
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="mt-10" />
          <div className="flex items-center justify-between text-2xl font-bold mt-10">
            <h2>Total Price: </h2>
            <h2>{total} $</h2>
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
          className="text-white bg-black/40 w-[0%] md:w-[60%] lg:w-[80%]"
          onClick={() => handleCartOpen()}
        ></div>
      </div>
    </div>
  );
};
export default Cart;
