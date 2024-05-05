import { CiCircleChevDown, CiCircleChevRight } from "react-icons/ci";
import "./Faq.css";
import { useEffect, useState } from "react";
import InstaImg1 from "../../../../assets/insta-img-1.webp"
import InstaImg2 from "../../../../assets/insta-img-2.webp"
import InstaImg3 from "../../../../assets/insta-img-3.webp"
import InstaImg4 from "../../../../assets/insta-img-4.webp"
import InstaImg5 from "../../../../assets/insta-img-5.webp"
import InstaImg6 from "../../../../assets/insta-img-6.webp"
import { Link } from "react-router-dom";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalImg,setModalImg] = useState(null)
  const [location,setLocation] = useState([])
  const [city,setCity] = useState([])

  const handleClickActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const openModal = (image) => {
    setModalImg(image)
  }
  const closeModal = () => {
    setModalImg(null)
  }

  const Faqs = [
    {
      id: 1,
      question: "What is the minimum age requirements to rent a car in Dubai ?",
      answer:
        "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
    },
    {
      id: 2,
      question: "What do you need for a luxury car rental in Dubai ?",
      answer:
        "Drivers shall be required to have a valid driver's license and Passport copy.",
    },
    {
      id: 3,
      question: "How much is the Insurance limit on luxury car rental Dubai?",
      answer:
        "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.",
    },
    {
      id: 4,
      question:
        "What are the driving licenses that can be used in Arab countries ?",
      answer:
        "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.",
    },
    {
      id: 5,
      question: "Can anyone else drive the car i rent?",
      answer:
        "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.",
    },
  ];
  const instagram = [
    {
      id:1,
      img: InstaImg1,
    },
    {
      id:2,
      img: InstaImg2,
    },
    {
      id:3,
      img: InstaImg3,
    },
    {
      id:4,
      img: InstaImg4,
    },
    {
      id:5,
      img: InstaImg5,
    },
    {
      id:6,
      img: InstaImg6,
    },
  ]
// location uchun
  const fetchLocation = async () => {
    try {
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/locations")
      if(response.ok){
        const locationData =await response.json()
        setLocation(locationData?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // city uchun
  const fetchCity = async () => {
    try {
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cities")
      if(response.ok){
        const cityData =await response.json()
        setCity(cityData?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLocation()
    fetchCity()
  },[])

  return (
    <div className="faq-container">
      <div className="faq-cards">
        <span className="faq">Faq</span>
        <div className="cards-faq">
          {Faqs.map((faq, index) => (
            <div className="card-faq" key={index} onClick={() => handleClickActive(index)}>
              {activeIndex != index ? <CiCircleChevRight className="faq-icon" /> : <CiCircleChevDown className="faq-icon" />}
              <div className="faq-ans-ques">
                <span className="ques">
                  {faq.question}
                </span>
                <span className={`ans ${activeIndex=== index ? "active" : ""}`}>
                  {faq.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="instagram-cards">
        <span className="insta">FOLLOW US ON INSTAGRAM</span>
        <div className="cards-insta">
          {instagram.map((image,index) => (
            <div className="card-insta" key={index} onClick={() => openModal(image)}>
              <img src={image.img} alt="" className="images" />
            </div>
          ))}
          {
            modalImg && (
              <div className="modal" onClick={closeModal}>
                <div className="img-modal" >
                <span className="close">&times;</span>
                <img src={modalImg.img} className="modal-content" alt="" />
              </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="location-city-container">
        <div className="location-cards">
          <span className="location-title">Location</span>
          <div className="location-card">
            {
              location.map((item,index) => (
                <Link to={`/cars/${item.id}`} className="location-item" key={index}>{item.name}</Link>
              ))
            }
          </div>
        </div>
        <div className="city-cards">
          <span className="city-title">CITY</span>
          <div className="city-card">
            {
              city.map((city,index) => (
                <Link to={`/cars/${city.id}`} className="city-item" key={index}>{city.name}</Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
