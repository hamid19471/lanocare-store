import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cartItem, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={cartItem}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
