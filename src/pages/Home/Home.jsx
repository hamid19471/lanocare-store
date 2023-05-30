import Layout from "../../layout";
import slider from "../../assets/slider.jpeg";

import icon1 from "../../assets/svg-icons/icon-01.svg";
import icon2 from "../../assets/svg-icons/icon-02.svg";
import icon3 from "../../assets/svg-icons/icon-03.svg";
import icon4 from "../../assets/svg-icons/icon-04.svg";

const Home = () => {
  return (
    <Layout>
      <div>
        <img
          src={slider}
          alt="Lanocare | skin care"
          className="h-full lg:-translate-y-28 w-full object-cover "
        />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 items-center justify-between bg-black/30 text-white py-32 px-20 gap-12 rounded-3xl mb-48">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <img src={icon1} alt="" className="w-[50px]" />
          <h3 className="text-xl font-[400] ">Good Shopping</h3>
          <p className="text-white/40 font-light tracking-wide">
            Safe and different shopping experience by providing the best quality
            in Lanocare
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <img src={icon2} alt="" className="w-[55px]" />
          <h3 className="text-xl font-[400] ">Safe Payment</h3>
          <p className="text-white/40 font-light tracking-wide">
            The possibility of safe and secure payment in a global context
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <img src={icon3} alt="" className="w-[50px]" />
          <h3 className="text-xl font-[400] ">Fast & Free Shipping</h3>
          <p className="text-white/40 font-light tracking-wide">
            The ability to send products around the world as quickly as possible
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <img src={icon4} alt="" className="w-[40px]" />
          <h3 className="text-xl font-[400] ">100% guarantee</h3>
          <p className="text-white/40 font-light tracking-wide">
            Guarantee and guarantee the authenticity and quality of goods
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
