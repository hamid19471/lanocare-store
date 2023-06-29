import { useNavigate } from "react-router-dom";
import logo from "../../assets/Main-logo.png";
import Button from "../../components/Button/Button";
const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-primary">
      <div>
        <img src={logo} alt="Lanocare" />
      </div>
      <div className="flex items-center justify-center flex-col mt-10 gap-2">
        <div className="font-bold text-[220px]">404</div>
        <h1 className="font-bold text-5xl uppercas">Sorry</h1>
        <p className="text-xl font-semibold ">
          It seem your are lost or the page you are looking for that is not
          exist any more
        </p>
      </div>
      <div className="mt-10">
        <Button onClick={() => navigate("/")}>Go To Home Page</Button>
      </div>
    </div>
  );
};
export default Notfound;
