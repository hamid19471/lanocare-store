import Layout from "../../layout";
import slider from "../../assets/slider.jpeg";
const Home = () => {
  return (
    <Layout>
      <img
        src={slider}
        alt="Lanocare | skin care"
        className="h-full lg:-translate-y-28 w-full object-cover "
      />
    </Layout>
  );
};
export default Home;
