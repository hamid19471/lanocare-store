const BlogCard = ({ item }) => {
  return (
    <div>
      <div className="bg-black p-[10px] m-[10px] w-[376px] mx-auto rounded-lg">
        <img src={item.image} alt="" />
        <div className="p-0">
          <h1 className="font-bold text-[25px] text-white p-[10px]">
            {item.title}
          </h1>
          <div className="w-[347px] text-justify font-light text-[16px] text-white/50 p-[10px]">
            {item.description}
          </div>
          <hr className="border-white/30 my-5" />
          <div className="flex items-center justify-between text-white/70 uppercase p-[10px]">
            <div>{item.date}</div>
            <div>{`${item.category}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
