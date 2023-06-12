import { menuItems } from "../../api/menuItems";
import { mobileMenu } from "../../api/mobileMenu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Main-Logo.png";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import Cart from "../../components/Cart/Cart";
import { useState } from "react";
import { useCart } from "../../context/Cart/CartProvider";
const Header = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="container relative z-10">
      <Cart open={open} handleOpen={() => setOpen(false)} />
      <div className="hidden bg-slate-100 backdrop-blur-3xl w-full rounded-full opacity-80 lg:flex items-center justify-between py-3 px-10 mt-8">
        <div className="w-full">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="inline-block mr-10 hover:scale-110 hover:text-primary  duration-300"
              >
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <Link to="/">
            <img src={logo} alt="Lanocare" className="w-24" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-3 ">
            <li>
              <CiUser size={23} />
            </li>
            <li>
              <div
                className="relative cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <CiShoppingBasket size={23} />
              </div>
              <span className="absolute top-4 right-9 bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-light p-2">
                {cart.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="lg:hidden text-white fixed bottom-0 flex items-center justify-around gap-8 left-1/2 -translate-y-1/2 -translate-x-1/2
            w-[470px] border-2 border-primary rounded-full py-5 px-8 bg-primary/60 backdrop:blur-lg"
      >
        <ul className="flex justify-center items-center gap-14">
          {mobileMenu.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
