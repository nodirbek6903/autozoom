import BlogCard from "./BlogCard/BlogCard";
import { blogData } from "./blog-data";

import "./Blog.css";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <div id="blog">
      <div className="container">
        <div className="blog__breadcrumb">
          <Link to={'/'}>Luxury Cars for Rent in Dubai</Link>
          {'/'}
          <Link to={'/'}>Blog</Link>
        </div>
        <h2 className="blog__title">blog</h2>
        <div className="blog__card__list">
          {blogData.map((item, index) => (
            <BlogCard key={index} id={item.id} img={item.img} title={item.title} description={item.description.slice(0, 400)} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;