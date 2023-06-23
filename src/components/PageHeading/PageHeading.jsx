import { Link } from "react-router-dom";

const PageHeading = ({ currentPage }) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl text-primary text-center pt-20 pb-5">
        {currentPage}
      </h1>
      <p className="text-white/70 pb-20">
        <Link to="/">Home</Link> /{" "}
        <span className="text-primary">{currentPage}</span>
      </p>
    </div>
  );
};
export default PageHeading;
