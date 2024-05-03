import "./Brands.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination,Grid } from "swiper/modules";

import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

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

  return (
    <div className="brands-container">
      <div className="brands-section">
        <h1 className="card-title">Brands</h1>
        <Swiper
          slidesPerView={6}
          grid={{
            rows:2,
            fill: 'row',
          }}
          spaceBetween={30}
          modules={[Navigation, Pagination,Grid]}
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
