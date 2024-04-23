import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-card1">
            <div className="footer-logo">
              <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
              <h2 className="footer-title">LUXURY CAR RENTAL IN DUBAI</h2>
              <span className="footer-descr">
                Rent sports and luxury cars directly without intermediaries.
                Rent a car in Dubai with Auto Zoom Car Rental - safety and
                driving pleasure
              </span>
              <a href="tel:+998903646903" target="_blank" className="footer-btn">Get Best Offer</a>
          </div>
          <div className="footer-card2">
            <div className="footer-cards2 cards2-card1">
              <div className="footer-card2">
                <h2 className="footer-card2-title">Cars</h2>
                <span className="cars">Suv</span>
                <span className="cars">Sports Cars</span>
                <span className="cars">Luxury Cars</span>
                <span className="cars">Convertible Cars</span>
                <span className="cars">Budget Cars</span>
                <span className="cars">American brands</span>
              </div>
              <div className="footer-card2">
                <h2 className="footer-card2-title">Blog</h2>
                <h2 className="footer-card2-title">Services</h2>
                <h2 className="footer-card2-title">Contacts</h2>
                <span className="cars">Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</span>
                <span className="cars">+971 55 8462124</span>
                <span className="cars">Working hours: 24/7</span>
              </div>
              <div className="footer-card2 card2-card3">
                <div className="footer-about">
                  <h2 className="footer-about-title">About Us</h2>
                  <span className="footer-about-descr">Our Team</span>
                  <Link to="/faq" className="footer-about-descr">Faq</Link>
                </div>
                <div className="footer-follows">
                  <h2 className="footer-follows-title">Follow Us</h2>
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
              <span className="license">&copy; {new Date().getFullYear()} Auto Zoom Car Rental. United Arab Emirates.</span>
              <Link to="/terms_and_conditions" className="conditions">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
