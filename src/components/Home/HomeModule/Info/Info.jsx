import { useEffect, useState } from "react";
import "./Info.css";
import { CiCircleChevRight } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Info = () => {
  // const [carsData, setCarsData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const { t } = useTranslation();
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const selectedLanguage = localStorage.getItem("language");
  useEffect(() => {
    fetchDataCars();
  }, []);
  // cars uchun
  const fetchDataCars = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/cars"
      );

      if (response.ok) {
        const cars = await response.json();
        // setCarsData(cars?.data);
        //sort qilish
        const sortedData = {};

        cars?.data.forEach((car) => {
          if (!sortedData[car.category_id]) {
            sortedData[car.category_id] = [];
          }
          sortedData[car.category_id].push(car);
        });
        setSortData(sortedData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="info-container">
      <div className="info-cards">
        {Object.keys(sortData).map((categoryId) => (
          <div className="info-card" key={categoryId}>
            <div className="info-titles-btn">
              {selectedLanguage === "en" ? (
                <span className="info-title">
                  {sortData[categoryId][0]?.category?.name_en} Rental Dubai
                </span>
              ) : (
                <span className="info-title">
                  {sortData[categoryId][0]?.category?.name_ru}
                </span>
              )}
              <button className="title-btn">
                {t("home-info-btn")}
                <Link
                  onClick={handleTop}
                  style={{ color: "#fff" }}
                  to={`/cars/${categoryId}`}
                >
                  <CiCircleChevRight className="title-icon" />
                </Link>
              </button>
            </div>
            <div className="card-slider">
              <Swiper
                loop={sortData[categoryId].length > 3 ? true : false}
                slidesPerView={3}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                className="card-swiper"
              >
                {sortData[categoryId].map((car, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/carsinfo/${car.id}`}
                      className="cars-slide"
                      onClick={handleTop}
                    >
                      <img
                        src={imgUrl + car.car_images[0]?.image?.src}
                        className="cars_image"
                        alt=""
                      />
                      <div className="cars-about">
                        <span className="cars-name">
                          {car.brand.title} {car.model.name}
                        </span>
                        <hr />
                        <span className="cars-model-price">
                          AED {car.price_in_aed} / ${car.price_in_usd}
                        </span>
                        <span className="cars-date">per day</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
