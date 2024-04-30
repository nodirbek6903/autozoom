import BlogCard from "./BlogCard/BlogCard";
import { blogData } from "./blog-data";

import "./Blog.css";


const Blog = () => {
  return (
    <div id="blog">
      <div className="container">
        <h2 className="blog__title">blog</h2>
        <div className="blog__card__list">
          {blogData.map((item, index) => (
            <BlogCard key={index} img={item.img} title={item.title} description={item.description.slice(0, 400)} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;