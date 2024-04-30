import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [brand, setBrand] = useState([]);
  const [brandModal, setBrandModal] = useState(false);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
// get qismi
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
      );

      if (response.ok) {
        const responseData = await response.json();
        setBrand(responseData.data);
      }else{
        console.log("Malumot olishda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

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
            <input type="text" className="search-input" placeholder="Search" />
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
              onClick={() => setBrandModal(false)}
            >
              {brand.map((item, index) => (
                <Link to={`/cars/${item.id}`} onClick={() => setBrandModal(false)} className="brand-modal-item" key={index}>
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
