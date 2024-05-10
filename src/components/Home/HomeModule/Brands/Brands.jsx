import "./Brands.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GetCars from "../../../../api/cars/get-cars.api";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const { t } = useTranslation();
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
      );
      if (res.ok) {
        const resData = await res.json();
        setBrands(resData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getCars = GetCars();
  // const Cars = getCars.data;

  // const test = Cars.data.filter((item) => item.brand_id === id);
  // console.log(test);

  return (
    <div className="brands-container">
      <div className="brands-section">
        <h1 className="card-title">{t("home-brand-title")}</h1>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
              pagination: false,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
              pagination: false,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
              pagination: false,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
              pagination: {
                clickable: true,
              },
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
              pagination: {
                clickable: true,
              },
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 30,
              pagination: {
                clickable: true,
              },
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          pagination={true}
          modules={[Navigation, Pagination, Grid]}
          className="swiper-cards"
        >
          {brands.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link to={`/cars/${item.id}`} className="swiper-card">
                <img
                  src={imgUrl + item.image_src}
                  className="brand-img"
                  alt=""
                />
                <span className="brand-title">{item.title}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
