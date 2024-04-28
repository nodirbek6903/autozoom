import { Link } from "react-router-dom";
import "./Categories.css";
import Lambo from "../../../../assets/lambo2.webp"
import { CiCircleChevRight } from "react-icons/ci";
const Categories = () => {
  return (
    <div className="category-container">
      <div className="category-cards1">
        <div className="category-card1">
          <span className="category-title">LUXURY CAR RENTAL IN DUBAI</span>
          <span className="category-desc">
            Are you ready to feel the adrenaline rush and unleash your inner
            speed demon? Look no further than Auto Zoom luxury car rental Dubai,
            the city where dreams become reality. In this ultimate guide to
            sports car rental Dubai, we will take you on a thrilling journey
            through the world of luxury and supercar rental Dubai. Imagine
            cruising down the iconic Sheikh Zayed Road in a sleek and powerful
            sports car rental Dubai style, turning heads and leaving everyone in
            awe of your style. Whether you are a car enthusiast or simply
            looking to
          </span>
        </div>
        <div className="category-card1">
          <span className="category-title">
            What are the requirements to rent a luxury car in Dubai?
          </span>
          <span className="category-desc">
            {`To rent a car Dubai, it's enough to have a valid driving license and
            enough funds. & you'll need to show your foreign passport and prove
            that you have come of age and have driving experience.The age limit
            and the requirements for the license depend on where you're from.
            Visitors from Europe, the UK, the US and the Middle East can drive
            with their national licenses. People from other parts of the world
            need an international license. The age limit for the driver might
            vary from 21 to 25 years. Please get in touch with us before placing
            an order to discuss your individual situation.Cars in the UAE have
            steering wheels on the left side. Drivers stick to the right side of
            the road.If needed, you can add a second driver to your rental
            contract. The requirements for this person will be the same as for
            the first driver. If you let someone who isn't mentioned in your
            rental contract take a place behind the wheel, you can get a
            fine.The duration of a premium car rental in Dubai can vary from one
            day to several weeks. Discounts are common for luxury car rental
            Dubai monthly car rental plan. Use this chance to have fun, increase
            your high social status and please your dearest and nearest!Please
            avoid smoking inside the rented vehicle.`}
          </span>
        </div>
      </div>
      <div className="category-cards2">
        <div className="category-card2">
        <div className="youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Bcg46rxqAE?si=M3xOWMVXL18pCNZY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe-video"
          ></iframe>
        </div>
        <div className="video-content">
          <span className="content-title">SPORTS CAR RENTAL DUBAI</span>
          <span className="video-desc">
            Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based
            company, We offer sports car rental, and supercar rental in Dubai.
            The best luxury car rental process provided by our fleet . We own a
            diverse range of luxury supercar rental and sports car rental Dubai
            style , including Rolls Royce, Lamborghini, Maserati, Ferrari,
            Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car
            with the best car rental company in Dubai.
          </span>
          <Link to="/cars" className="video-btn">All Cars <CiCircleChevRight className="video-icon" /> </Link>
        </div>
        </div>
        <div className="category-card2 lambo-cont">
          <div className="img-cont">
            <img src={Lambo} alt="" />
          </div>
          <div className="lambo-content">
            <span className="lambo-title">SUPERCAR RENTAL DUBAI</span>
            <span className="lambo-desc">Hire the latest supercar</span>
            <Link to="/cars" className="lambo-btn">SEE ALL <CiCircleChevRight className="video-icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
