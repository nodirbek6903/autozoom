import { Link, useParams } from "react-router-dom";
import "./Cars.css";
import { useEffect, useState, useContext } from "react";
import { CarsList } from "./CarsList/CarsList";
import axios from "axios";
import { FilteredCarsContext } from "./CarsProvider/CarsProvider";
import { useCarsProps } from "./useCarsProps";

export const Cars = () => {
  const { rentprice, BASE_URL } = useCarsProps();
  const [checked, setChecked] = useState(false);

  const [Brands, setBrands] = useState();
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [category, setCategory] = useState();

  const [model, setModel] = useState();
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectModel, setSelectModels] = useState([]);

  const [Cars, SetCars] = useState();
  const [FilterData, SetFilterData] = useState();

  const [price, setPrice] = useState();
  const [day, setDay] = useState();

  const { filteredCars } = useContext(FilteredCarsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/models`);
        setModel(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cars`);
        SetCars(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    Data();
  }, []);

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    Data();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/brands`);
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const handleBrand = async (e) => {
    const brandId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brandId]);
      try {
        const response = await axios.get(
          `${BASE_URL}/models?brand_id=${brandId}`
        );
        setSelectModels(response.data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    } else {
      const updatedBrands = selectedBrands.filter((brand) => brand !== brandId);
      setSelectedBrands(updatedBrands);
      setSelectModels([]);
    }
  };

  const handleModel = (e) => {
    const modelId = e.target.value;
    setSelectedModels(modelId);
  };

  const handleCategory = (e) => {
    const categoryId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const updatedCategories = selectedCategories.filter(
        (category) => category !== categoryId
      );
      setSelectedCategories(updatedCategories);
    }
  };

  const handleChecked = (e) => {
    setChecked(!checked);
  };

  const handlePrice = (price, day) => {
    if (price !== undefined && day !== undefined) {
      console.log("Selected price:", price + "day: ", day);
      setPrice(price);
      setDay(day);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = Cars && Cars.data ? Cars.data : [];

    const categoryFilter = filteredData.filter((car) =>
      selectedCategories.includes(car.category.id)
    );

    const brandFilter = filteredData.filter((car) =>
      selectedBrands.includes(car.brand.id)
    );

    const modelFilter = filteredData.filter((car) =>
      selectedModels.includes(car.model.id)
    );

    const combinedFilter = filteredData.filter(
      (car) => brandFilter.includes(car) || categoryFilter.includes(car)
    );

    let totalPrice = [];

    if (price === 5000 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 5000);
    } else if (price === 5000 && day === 2) {
      totalPrice = filteredData.filter((car) => car.price_in_aed * 2 <= 5000);
    } else if (price === 1300 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 1300);
    } else if (price === 1800 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 1800);
    } else if (price === 5000 && day === "all") {
      totalPrice = filteredData.filter((car) => car.price_in_aed <= 5000);
    } else if (price === 0 && day === "no") {
      totalPrice = filteredData.filter((car) => car.deposit === 0);
    } else if (price === 5000 && day === 4) {
      totalPrice = filteredData.filter((car) => car.price_in_aed * 4 <= 5000);
    } else if (price === 1 && day === "ferrari") {
      totalPrice = filteredData.filter(
        (car) => car.location.id === "0fe47cb9-5bcc-4b04-8167-36a623c6aab9"
      );
    }

    if (totalPrice.length > 0) {
      SetFilterData(totalPrice);
    } else if (modelFilter.length > 0) {
      SetFilterData(modelFilter);
    } else if (combinedFilter.length > 0) {
      SetFilterData(combinedFilter);
    } else {
      SetFilterData(filteredData);
    }
  };

  useEffect(() => {
    SetFilterData(filteredCars);
  }, [filteredCars]);

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
                {rentprice &&
                  rentprice.map((item, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        key={index}
                        className="vehicle-inp"
                        type="checkbox"
                        value={item.price && item.day}
                        onChange={() => handlePrice(item.price, item.day)}
                        onClick={handleChecked}
                      />
                      {item.name}
                    </label>
                  ))}
              </div>

              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Car type</h4>
                {category &&
                  category.data.map((item, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        className="vehicle-inp"
                        type="checkbox"
                        value={item.id}
                        onChange={handleCategory}
                        onClick={handleChecked}
                      />
                      {item.name_en}
                    </label>
                  ))}
              </div>

              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Brand</h4>
                {Brands &&
                  Brands.data.map((brand, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        className="vehicle-inp"
                        type="checkbox"
                        value={brand.id}
                        onChange={handleBrand}
                        onClick={handleChecked}
                      />
                      {brand.title}
                    </label>
                  ))}
              </div>
              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Model</h4>

                <select
                  className="vehicle-select"
                  value={selectModel ? selectModel.id : ""}
                  onChange={(e) => handleModel(e)}
                  onClick={handleChecked}
                >
                  <option value="">Select Model</option>
                  {selectModel && selectModel.data
                    ? selectModel.data.map((brand, index) => (
                        <option key={index} value={brand.id}>
                          {brand.name}
                        </option>
                      ))
                    : model &&
                      model.data.map((brand, index) => (
                        <option key={index} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                </select>
              </div>
              <div className="vehicle-form-box">
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
            {FilterData && FilterData.length > 0
              ? FilterData.map((item, index) => (
                  <CarsList
                    key={index}
                    src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.car_images[0].image.src}`}
                    name={item.brand.title}
                    model={item.model.name}
                    slug={item.price_in_aed}
                    text={item.price_in_usd}
                    id={item.id}
                  />
                ))
              : Cars &&
                Cars.data.map((item, index) => (
                  <CarsList
                    key={index}
                    src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.car_images[0].image.src}`}
                    name={item.brand.title}
                    model={item.model.name}
                    slug={item.price_in_aed}
                    text={item.price_in_usd}
                    id={item.id}
                  />
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
