import { Link } from "react-router-dom"
import "./About.css"
const About = () => {
  return (
    <div className="about-container">
        <div className="abouts">
        <Link to="/" className="about-link">Luxury Cars for Rent in Dubai / aboutUs2</Link>
        <span className="about-title">About Us</span>
        <div className="about-cards">
            <div className="about-card">
                <span className="about-card-title">Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!</span>
                <span className="about-card-desc">In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.</span>
            </div>
            <div className="about-card">
                <span className="about-card-title">Why Auto Zoom?</span>
                <span className="about-card-desc"><b>Elegant Car Fleet:</b>We provide you the opportunity to choose from our luxurious car fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.</span>
                <span className="about-card-desc"><b>Worry-Free Rental:</b>Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience.</span>
                <span className="about-card-desc"><b>Transparency and Trust:</b>We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear.</span>
                <span className="about-card-desc"><b>Service at Your Level:</b>Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.</span>
            </div>
            <div className="about-card mission">
                <span className="about-card-title">Our Mission:</span>
                <span className="about-card-desc">Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.</span>
            </div>
            <div className="about-card">
                <span className="about-card-title">Contact Us:</span>
                <span className="about-card-desc">Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.</span>
            </div>
        </div>
        </div>
        <hr />
    </div>
  )
}

export default About