import { BlogData } from "../../api/BlogData";
import BlogCard from "../BlogCard/BlogCard";

const BlogList = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {BlogData.map((item) => (
        <div key={item.id}>
          <BlogCard item={item} />
        </div>
      ))}
    </div>
  );
};
export default BlogList;
