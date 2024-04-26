import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Footer = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.data);
        setData(responseData.data);
      } else {
        console.log("Malumot olishda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-card1">
            <div className="footer-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <h2 className="footer-title">LUXURY CAR RENTAL IN DUBAI</h2>
            <span className="footer-descr">
              Rent sports and luxury cars directly without intermediaries. Rent
              a car in Dubai with Auto Zoom Car Rental - safety and driving
              pleasure
            </span>
            <a href="tel:+998903646903" target="_blank" className="footer-btn">
              Get Best Offer
            </a>
          </div>
          <div className="footer-card2">
            <div className="footer-cards2 cards2-card1">
              <div className="footer-card2">
                <Link to="/cars" className="footer-card2-title">
                  Cars
                </Link>
                {data.map((item, index) => (
                  <Link to={`/cars/${item.id}`} className="cars" key={index}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="footer-card2">
                <Link to="/blog" className="footer-card2-title">
                  Blog
                </Link>
                <Link to="/service" className="footer-card2-title">
                  Services
                </Link>
                <Link to="/contact" className="footer-card2-title">
                  Contacts
                </Link>
                <span className="cars">
                  Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                </span>
                <span className="cars">+971 55 8462124</span>
                <span className="cars">Working hours: 24/7</span>
              </div>
              <div className="footer-card2 card2-card3">
                <div className="footer-about">
                  <Link to="/about-us" className="footer-about-title">
                    About Us
                  </Link>
                  <Link to="/our-team" className="footer-about-descr">
                    Our Team
                  </Link>
                  <Link to="/faq" className="footer-about-descr">
                    Faq
                  </Link>
                </div>
                <div className="footer-follows">
                  <h2
                    style={{ cursor: "pointer" }}
                    className="footer-follows-title"
                  >
                    Follow Us
                  </h2>
                  <div className="footer-follows-icons">
                    <FaInstagram className="footer-icon instagram" />
                    <FaFacebook className="footer-icon facebook" />
                    <FaYoutube className="footer-icon youtube" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="cards2-card2">
              <span className="license">
                &copy; {new Date().getFullYear()} Auto Zoom Car Rental. United
                Arab Emirates.
              </span>
              <Link to="/terms_and_conditions" className="conditions">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
