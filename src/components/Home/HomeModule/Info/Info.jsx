import { Box, Skeleton } from "@mui/material";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GetCars from "../../../../api/cars/get-cars.api";
import "./Info.css";
const Info = () => {

  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const {data:carsData,isLoading} = GetCars()
  return (
    <div className="info-container">

      <h1></h1>
      <div className="info-cards">
        {
          isLoading ? (
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",rowGap:"20px"}}>
            {
              Array.from({ length: 6 }).map((_,ind) =>{
                return(
                  <Skeleton key={ind} variant="rounded" width={410} height={300} />
                )
              })
            }
            </Box>
          ):
        
        carsData?.data?.map((car, carIndex) => (
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
