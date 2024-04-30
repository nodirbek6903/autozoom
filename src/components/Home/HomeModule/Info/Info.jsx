import { useEffect, useState } from "react";
import "./Info.css";
import { CiCircleChevRight } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
const Info = () => {
  const [carsData, setCarsData] = useState([]);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
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
        setCarsData(cars?.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="info-container">

      <h1></h1>
      <div className="info-cards">
        {carsData.map((car, carIndex) => (
          <div className="info-card" key={carIndex}>
            <div className="info-titles-btn">
              <span className="info-title">
                {car.category.name_en} Rental Dubai
              </span>
              <button className="title-btn">
                See All{" "}
                <Link style={{ color: "#fff" }} to={`/cars/${car.category_id}`}>
                  <CiCircleChevRight className="title-icon" />
                </Link>
              </button>
            </div>
            <div className="card-slider">
              <Swiper loop={false} slidesPerView={3} className="card-swiper">
                {car.car_images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <Link
                      to={`/carsinfo/${image.car_id}`}
                      className="cars-slide"
                    >
                      <img
                        src={imgUrl + image.image.src}
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
