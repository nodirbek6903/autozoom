import { Link } from "react-router-dom";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contacts">
        <Link to="/" className="contact-link">
          Luxury Cars for Rent in Dubai / Contacts
        </Link>
        <span className="contact-title">HAVE ANY QUESTIONS?</span>

        <div className="texts">
          <p className="contact-text">We would love to help</p>
          <p className="contact-text">
            Auto Zoom Car Rental Dubai, is the best luxury car rental Dubai
            based company.
          </p>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-card-title">Head office</span>
            <div className="contact-card-link">
              <CiLocationOn className="link-icons" />
              <span className="links">
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </span>
            </div>
            <div className="contact-card-link">
              <CiPhone className="link-icons" />
              <a href="tel:+971558462124" target="_blank" className="links">
                +971 (55) 846 21 24
              </a>
            </div>
            <div className="contact-card-link">
              <SlEnvolopeLetter className="link-icons" />
              <a
                href="mailto:office@autozoomrental.com"
                target="_blank"
                className="links"
              >
                office@autozoomrental.com
              </a>
            </div>
          </div>
          <hr />
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1714817439223!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
