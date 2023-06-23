import BlogList from "../../components/BlogList/BlogList";
import PageHeading from "../../components/PageHeading/PageHeading";

const Blog = () => {
  return (
    <div className="container mb-32">
      <PageHeading currentPage="Blog" />
      <BlogList />
    </div>
  );
};
export default Blog;
