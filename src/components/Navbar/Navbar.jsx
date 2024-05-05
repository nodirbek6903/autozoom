import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FilteredCarsContext } from "../Cars/CarsProvider/CarsProvider";
const Navbar = () => {
  const [brand, setBrand] = useState([]);
  const [brandModal, setBrandModal] = useState(false);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [searchQuery, setSearchQuery] = useState("");
  const [Carss, SetCars] = useState([]);
  const navigate = useNavigate();

  const { filteredCars, setFilteredCars } = useContext(FilteredCarsContext);
  const BASE_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";

  // Fetch brands

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
        );

        if (response.ok) {
          const responseData = await response.json();
          setBrand(responseData.data);
        } else {
          console.log("Error fetching brands");
        }
      } catch (error) {
        console.log("Error fetching brands:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cars`);
        SetCars(response.data || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const search = (e) => {
    e.preventDefault();
    const filtered = Carss.data.filter(
      (car) =>
        car.brand.title.toLowerCase().trim() ===
        searchQuery.toLowerCase().trim()
    );
    setFilteredCars(filtered);
    navigate("/cars");
    setSearchQuery("");
  };

  return (
    <div className="nav-container">
      <div className="container" onMouseLeave={() => setBrandModal(false)}>
        <div className="nav-lang-search">
          <div className="nav-lang">
            <span className="lang-item">
              <img
                alt="United States"
                width={30}
                height={30}
                className="lang-img"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              />
            </span>
            <span className="lang-item">
              <img
                alt="United States"
                width={30}
                height={30}
                className="lang-img"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
              />
            </span>
          </div>
          <div className="nav-search">
            <FaSearch className="search-icon" />

            <form onSubmit={search}>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} className="logo-img" alt="" />
          </Link>
        </div>
        <div className="nav-items">
          <Link
            to="/cars"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            Cars
          </Link>
          <span className="nav-item" onMouseEnter={() => setBrandModal(true)}>
            Brand
          </span>
          {brandModal && (
            <div
              className="brand-modal"
              onMouseLeave={() => setBrandModal(false)}
            >
              {brand.map((item, index) => (
                <Link
                  to={`/cars/${item.id}`}
                  className="brand-modal-item"
                  key={index}
                >
                  <div className="brand-logo">
                    <img
                      src={imgUrl + item.image_src}
                      alt=""
                      className="brand-img"
                    />
                  </div>
                  <span className="brand-name">
                    <span className="name-item">Rent</span>
                    <b>{item.title}</b> <span className="name-item">Dubai</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/services"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            About Us
          </Link>
          <Link
            to="/contacts"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            Contacts
          </Link>
          <Link
            to="/blog"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            Blog
          </Link>
          <a href="tel:+998903646903" target="_blank" className="nav-item">
            +971(55)846 21 24
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
