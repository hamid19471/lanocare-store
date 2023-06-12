import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartProvider from "./context/Cart/CartProvider";
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />;
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
