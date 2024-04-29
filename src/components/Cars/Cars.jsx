import { Link } from "react-router-dom";
import "./Cars.css";
import { CarsLabel } from "./CarsLabel/CarsLabel";
import { useCarsProps } from "./useCarsProps";
import { createContext, useEffect, useState } from "react";
import { CarsList } from "./CarsList/CarsList";
import axios from "axios";

export const Cars = () => {
  const { CarsType } = useCarsProps();
  const [value, setValue] = useState("");
  const [CarsCard, setCarsCard] = useState();
  const [CarsData, setCarsData] = useState();
  const [checked, setChecked] = useState(false);

  const BASE_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/locations`);
        setCarsCard(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let filteredData = CarsCard.data;

    if (value && value.trim() !== "") {
      filteredData = CarsCard.data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (checked) {
      setCarsData({ data: filteredData });
    } else {
      setCarsData({ data: [] });
    }
  };

  return (
    <section className="vehicle">
      <div className="container">
        <div className="vehicle-box">
          <div className="vehicle-div">
            <h3 className="vehicle-by">Filter By</h3>
            <h4 className="vehicle-offer">Offers</h4>
            <form className="vehicle-form" onSubmit={handleSubmit}>
              <div className="vehicle-form-box"></div>
              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Car type</h4>
                {CarsType &&
                  CarsType.data.map((car, index) => (
                    <CarsLabel key={index} text={car.model.name} />
                  ))}
              </div>

              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Brand</h4>
                {CarsType &&
                  CarsType.data.map((car, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        className="vehicle-inp"
                        type="checkbox"
                        value={car.brand.title}
                        onChange={handleChange}
                      />
                      {car.brand.title}
                    </label>
                  ))}
              </div>
              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Model</h4>

                <div className="vehicle-bts">
                  <button className="vehicle-rest" type="reset">
                    Reset
                  </button>
                  <button className="vehicle-submit" type="submit">
                    Apply filter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="vehicle-main">
          <Link className="vehicle-link" to={"/cars"}>
            Luxury Cars for Rent in Dubai /{" "}
            <span>Hire the latest supercar</span>
          </Link>

          <ul className="vehicle-ul">
            {CarsData && CarsData.data.length > 0
              ? CarsData.data.map((item, index) => (
                  <CarsList
                    key={index}
                    src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.image_src}`}
                    name={item.name}
                    slug={item.slug}
                    text={item.text}
                  />
                ))
              : CarsCard &&
                CarsCard.data.map((item, index) => (
                  <CarsList
                    key={index}
                    src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.image_src}`}
                    name={item.name}
                    slug={item.slug}
                    text={item.text}
                  />
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
