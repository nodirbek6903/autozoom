import { Link, useParams } from "react-router-dom";
import "./ServicePlans.css";
import { useEffect, useState } from "react";
import serviceData from "../ServiceData";
const ServicePlans = () => {
  const { link } = useParams();
  const [data, setData] = useState([]);

  const selectedServiceItem = serviceData.find((item) => item.link === link);
  useEffect(() => {
    if (selectedServiceItem) {
      setData(selectedServiceItem.serviceItems);
    }
  }, [link]);

  return (
    <div className="serviceplans-container">
      <Link to="/" className="plans-link">Luxury Cars for Rent in Dubai/ Services/ {selectedServiceItem.title}</Link>
      <span className="plans-title">{selectedServiceItem.title}</span>
      <div className="plans-cards">
        {data.map((item, index) => (
          <div className="plans-card" key={index}>
            <div className="plans-img">
              <img src={item.itemImage} alt="" />
            </div>
            <div className="item-abouts">
            <span className="basic">{item.basic}</span>
            <div className="itemnumber">
              <span className="numb">{item.itemNumber}</span>
              <span className="numbtext">{item.itemNumberText}</span>
            </div>
            <span className="itemText">{item.itemText}</span>
            <span className="itemTitle">{item.itemTitle}</span>
            <div className="item-checkCards">
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText1}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText2}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText3}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText4}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText5}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText6}</span>
              </div>
              <div className="item-checkCard">
                <span className="checkimg">
                  <img src={item.itemCheckImage} alt="" />
                </span>
                <span className="check-text">{item.itemCheckText7}</span>
              </div>
            </div>
            <div className="item-btn">
              <a href="tel: +971(55)8462124" target="_blank" className="check-btn">{item.itemBtn}</a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePlans;
