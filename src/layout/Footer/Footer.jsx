import logo from "../../assets/Main-Logo.png";
import { VscCircleFilled } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <div className="bg-black text-slate-200/80 rounded-t-3xl pt-6 px-6 pb-40">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-16 pt-10">
            <div className="flex flex-col items-start justify-center">
              <img src={logo} alt="Lanocare" className="w-[126px]" />
              <p className="text-justify mt-5 font-light text-md leading-6 pr-10">
                Cappuccino extraction half and half blue mountain dark strong
                doppio coffee. Percolator, turkish beans eu cream at
                decaffeinated. Chicory brewed, coffee flavour mazagran iced
                strong. Espresso milk cinnamon variety wings mazagran to go at
                barista single shot ut shop. Filter so caffeine dark sweet
                strong cinnamon single shot carajillo
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-light text-2xl text-white tracking-wider">
                Quick Links
              </h3>
              <hr className="w-[60px] mt-3 border-t-2 border-primary" />
              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primary duration-300 font-light">
                  <span>
                    <VscCircleFilled className="text-primary w-3" />
                  </span>
                  <Link to="shop">Shop</Link>
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primary duration-300 font-light">
                  <span>
                    <VscCircleFilled className="text-primary w-3" />
                  </span>
                  <Link to="shop">Products</Link>
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primary duration-300 font-light">
                  <span>
                    <VscCircleFilled className="text-primary w-3" />
                  </span>
                  <Link to="blog">Blog</Link>
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primary duration-300 font-light">
                  <span>
                    <VscCircleFilled className="text-primary w-3" />
                  </span>
                  <Link to="privacy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-light text-2xl text-white tracking-wider">
                Contact
              </h3>
              <hr className="w-[60px] mt-3 border-t-2 border-primary" />
              <div className="flex flex-col mt-4 gap-3 font-light tracking-wide">
                <p>
                  <strong>Address</strong>: No.28, Qeytarieh, Tehran, Iran
                </p>
                <p>
                  <strong>Phone</strong>: +989125180421
                </p>
                <div>
                  <ul className="flex gap-6 mt-8 text-primary">
                    <li className="cursor-pointer hover:scale-125 duration-300">
                      <Link to="https://www.instagram.com/" target="_black">
                        <AiOutlineInstagram />
                      </Link>
                    </li>
                    <li className="cursor-pointer hover:scale-125 duration-300">
                      <Link to="https://www.facebook.com/" target="_black">
                        <BsFacebook />
                      </Link>
                    </li>
                    <li className="cursor-pointer hover:scale-125 duration-300">
                      <Link to="https://twitter.com/" target="_black">
                        <AiOutlineTwitter />
                      </Link>
                    </li>
                    <li className="cursor-pointer hover:scale-125 duration-300">
                      <Link to="https://www.youtube.com/" target="_black">
                        <AiFillYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-slate-200/80 rounded-b-3xl py-3 px-6">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div>
              <p className="font-light text-black/80 uppercase tracking-wider text-center md:text-left">
                Copyright 2022 Lanocare . All rights reserved
              </p>
            </div>
            <div>
              <p className="text-black/80 uppercase font-light">
                Design and development:
                <Link to="https://hamidasadi.com" target="_blank">
                  <span className="font-bold"> Hamid Asadi</span>
                </Link>
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <ul className="flex items-center justify-center gap-8 font-light text-black tracking-wide">
                <li>Tracking Order</li>
                <li className="border-y-0 px-8 border-x-1 border border-black">
                  <Link to="contact">Contact us</Link>
                </li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
