import { Link, useParams } from "react-router-dom";
import { blogData } from "../Blog/blog-data";
import "./BlogInfo.css";

const BlogInfo = () => {
  const { id } = useParams();
  const data = blogData[id-1];
  console.log(id);
  return (
    <div id="blog-info">
      <div className="container">
        <div className="blog__breadcrumb">
          <Link to={'/'}>Luxury Cars for Rent in Dubai</Link>
          {'/'}
          <Link to={'/blog'}>Blog</Link>
          {'/'}
          <Link to={'/'}>Top 5 Reasons to Rent a Car Dubai</Link>
        </div>
        <h2 className="blogInfo__title">{data.title}</h2>
        <p className="blogInfo__description">{data.descriptionOne}</p>
        <p className="blogInfo__subtitle">{data.location}</p>
        <img className="blogInfo__img" src={data.img} alt="img" />
        <p className="blogInfo__description">{data.descriptionTwo}</p>
      </div>
    </div>
  )
}

export default BlogInfo;