import { CiCircleChevRight } from "react-icons/ci";
import "./BlogCard.css";

function BlogCard({ img, title, description, date }) {
  return (
    <div className="blog__card">
      <div className="blog__card__img">
        <img src={img} alt="blog-img" />
      </div>
      <div className="blog__card__content">
        <h3 className="blog__card__title">{title}</h3>
        <p className="blog__card__description">{description}...</p>
        <div className="card__content__footer">
          <span>{date}</span>
          <CiCircleChevRight className="card__arrow__icon" />
        </div>
      </div>
    </div>
  )
}

export default BlogCard;