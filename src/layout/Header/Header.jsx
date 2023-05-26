import { menuItems } from "../../api/menuItems";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Main-Logo.png";
const Header = () => {
  return (
    <header className="container">
      <div className="bg-slate-100 w-full rounded-full opacity-80 flex items-center justify-between py-3 px-10 mt-8">
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
    </header>
  );
};
export default Header;
