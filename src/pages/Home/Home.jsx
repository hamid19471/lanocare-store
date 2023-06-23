import slider from "../../assets/slider.jpeg";
import icon1 from "../../assets/svg-icons/icon-01.svg";
import icon2 from "../../assets/svg-icons/icon-02.svg";
import icon3 from "../../assets/svg-icons/icon-03.svg";
import icon4 from "../../assets/svg-icons/icon-04.svg";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";
import BlogList from "../../components/BlogList/BlogList";

const Home = () => {
  return (
    <>
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
      <div>
        <div>
          <h2 className="text-[40px] font-extralight tracking-wide text-center text-white mb-10">
            Our Products
          </h2>
          <hr className="border-primary w-20 mx-auto mb-10 -translate-y-4" />
        </div>
        <ProductList slice={4} />
        <div className="container flex items-center justify-center my-12 text-white text-lg">
          <Link to="/shop">
            <Button primary="primary">View All Products</Button>
          </Link>
        </div>
        <div className="mt-32">
          <h2 className="text-[40px] font-extralight tracking-wide text-center text-white mb-10">
            Testimonials
          </h2>
          <hr className="border-primary w-20 mx-auto mb-10 -translate-y-4" />
          <Testimonials />
        </div>
        <div className="mt-32 mb-44">
          <h2 className="text-[40px] font-extralight tracking-wide text-center text-white mb-10">
            Blog
          </h2>
          <hr className="flex items-center justify-center border-primary w-20 mx-auto mb-10 -translate-y-4" />
          <BlogList />
        </div>
      </div>
    </>
  );
};
export default Home;
