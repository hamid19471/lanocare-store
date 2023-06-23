import { BlogData } from "../../api/BlogData";
import BlogCard from "../../components/BlogCard/BlogCard";
const Blog = () => {
  return (
    <div className="container flex gap-3">
      {BlogData.map((item) => (
        <div key={item.id}>
          <BlogCard item={item} />
        </div>
      ))}
    </div>
  );
};
export default Blog;
