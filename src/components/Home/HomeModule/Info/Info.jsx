import { Box, Skeleton } from "@mui/material";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GetCars from "../../../../api/cars/get-cars.api";
import "./Info.css";
const Info = () => {
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const { data: carsData, isLoading } = GetCars();
  carsData?.data?.sort((a, b) =>
    a.category.name_en.localeCompare(b.category.name_en)
  );

  const groupedItems = carsData?.data?.reduce((map, item) => {
    const categoryId = item.category.id;
    const categoryItems = map.get(categoryId) || [];
    categoryItems.push(item);
    map.set(categoryId, categoryItems);
    return map;
  }, new Map());
  const newArray = !isLoading && Array.from(groupedItems.values());

  return (
    <div className="info-container">
      <div className="info-cards">
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: "20px",
            }}
          >
            {Array.from({ length: 6 }).map((_, ind) => {
              return (
                <Skeleton
                  key={ind}
                  variant="rounded"
                  width={410}
                  height={300}
                />
              );
            })}
          </Box>
        ) : (
          newArray.map((el, carsIndex) => {
            return (
              <div className="info-card" key={carsIndex}>
                <div className="info-titles-btn">
                  <span className="info-title">
                    {el[0].category.name_en} Rental Dubai
                  </span>
                  <button className="title-btn">
                    See All{" "}
                    <Link style={{ color: "#fff" }} to={``}>
                      <CiCircleChevRight className="title-icon" />
                    </Link>
                  </button>
                </div>
                <div className="card-slider">
                  <Swiper
                    loop={false}
                    slidesPerView={3}
                    className="card-swiper"
                  >
                    {el?.map((car, carIndex) => {
                      return (
                        <SwiperSlide key={carIndex}>
                          <Link
                            to={`/carsinfo/${car.car_images[0].car_id}`}
                            className="cars-slide"
                          >
                            <img
                              src={imgUrl + car.car_images[0].image.src}
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
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Info;
