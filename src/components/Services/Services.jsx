import "./Services.css"
import { CiCircleChevRight } from "react-icons/ci"
import { Link } from "react-router-dom"
import serviceData from "./ServiceData"
const Services = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="services-container">
      <Link to="/" className="service-location">Luxury Cars for Rent in Dubai / Services</Link>
      <span className="service-title">Services</span>
      <div className="services-cards">
        {
          serviceData.map((item,ind) => (
            <div className="services-card" key={ind}>
          <div className="service-img">
            <img src={item.img} alt="" />
          </div>
          <div className="service-about">
            <span className="about-title">{item.title}</span>
            <span className="about-desc">{item.desc}</span>
            <Link to={`/services/${item.link}`} onClick={scrollTop} className="about-btn">{item.btn} <CiCircleChevRight className="service-icon" /></Link>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services