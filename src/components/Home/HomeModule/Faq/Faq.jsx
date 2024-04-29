import { CiCircleChevDown, CiCircleChevRight } from "react-icons/ci";
import "./Faq.css";
import { useState } from "react";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    </div>
  );
};

export default Faq;
