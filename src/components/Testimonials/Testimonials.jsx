import Slider from "react-slick";
import TestimonialsCard from "../TestimonialCard/TestimonialCard";
import { TestimonialsData } from "../../api/TestimonialsData";

const Testimonials = () => {
  const settings = {
    Infinite: true,
    LazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    ceneterMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="container mb-28">
      <Slider {...settings}>
        {TestimonialsData.map((item) => (
          <div key={item.id} className="">
            <TestimonialsCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Testimonials;
