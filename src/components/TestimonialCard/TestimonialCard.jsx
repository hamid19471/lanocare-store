const TestimonialsCard = ({ item }) => {
  return (
    <div className="  bg-black/10 rounded-xl px-10 m-8">
      <div className="flex flex-col text-white items-center justify-center space-y-4 relative -translate-y-8">
        <img src={item.image} alt="avatar" className="w-14 h-1/2" />
        <h1 className="text-xl font-light">{item.name}</h1>
        <h2 className="text-lg font-light">{item.title}</h2>
        <p className="text-white/40 text-center">{item.description}</p>
      </div>
    </div>
  );
};
export default TestimonialsCard;
