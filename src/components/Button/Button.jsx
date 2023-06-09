const Button = ({ primary, children, onClick, fullWidth }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`py-3 px-5 rounded-xl hover:scale-110 duration-300 ${
          primary
            ? "bg-primary"
            : "border border-primary text-primary hover:bg-primary hover:text-black"
        } ${fullWidth && "w-full"}`}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
