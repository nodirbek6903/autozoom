import "./HomeService.css"
import { CiCircleChevRight } from "react-icons/ci"
import { Link } from "react-router-dom"
import serviceData from "../../../Services/ServiceData"
const HomeService = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="homeService-container">
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

export default HomeService