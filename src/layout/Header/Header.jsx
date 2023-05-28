import { menuItems } from "../../api/menuItems";
import { mobileMenu } from "../../api/mobileMenu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Main-Logo.png";
const Header = () => {
  return (
    <header className="container relative z-10">
      <div className="hidden bg-slate-100 backdrop-blur-3xl w-full rounded-full opacity-80 md:flex items-center justify-between py-3 px-10 mt-8">
        <div>
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
        <div>
          <Link to="/">
            <img src={logo} alt="Lanocare" className="w-24" />
          </Link>
        </div>
      </div>
      <div
        className="md:hidden text-white fixed bottom-0 flex items-center justify-around gap-8 left-1/2 -translate-y-1/2 -translate-x-1/2
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
