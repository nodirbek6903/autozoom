import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Bmw1 from "../../../../assets/bmw.png";
import Bmw2 from "../../../../assets/bmw2.png";
import Bmw3 from "../../../../assets/bmw3.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        navigation={true}
        slidesPerView={3}
        loop={true}
        pagination={{clickable:true}}
        modules={[Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="cars-img-container">
          <div className="img-container">
            <img className="cars-image" src={Bmw1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <div className="img-container">
            <img className="cars-image" src={Bmw2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <div className="img-container">
            <img className="cars-image" src={Bmw3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <div className="img-container">
            <img className="cars-image" src={Bmw1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
