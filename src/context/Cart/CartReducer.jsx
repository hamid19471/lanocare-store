const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const findItem = state.cart.find((item) => item.id === payload.id);
      if (findItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity++ }
              : item
          ),
          total: state.total + payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
          total: state.total + payload.price,
        };
      }
    }
    case "DECREMENT_QUANTITY": {
      const findItem = state.cart.find((item) => item.id === payload.id);
      if (findItem.quantity >= 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity-- }
              : item
          ),
          total: state.total - payload.price,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== payload.id),
          total: state.total - payload.price,
        };
      }
    }
    case "EMPTY_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
