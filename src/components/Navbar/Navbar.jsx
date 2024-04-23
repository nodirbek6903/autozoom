import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [brandModal, setBrandModal] = useState(false);
//   const handleBrandModalToggle = () => {
//     setBrandModal(!brandModal);
//   };
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
          <Link to="/cars" className="nav-item" onMouseEnter={() => setBrandModal(false)}>
            Cars
          </Link>
            <span className="nav-item" onMouseEnter={() => setBrandModal(true)}
            >Brand</span>
            {brandModal && (
              <div
                className="brand-modal"
                onMouseLeave={() => setBrandModal(false)}
              >
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
                <div className="brand-modal-item">
                  <div className="brand-logo">
                    <img
                      src="https://www.carlogos.org/car-logos/audi-logo-1700x2200.png"
                      alt=""
                    />
                  </div>
                  <div className="brand-name">Audi</div>
                </div>
              </div>
            )}
          <Link to="/services" className="nav-item" onMouseEnter={() => setBrandModal(false)}>
            Services
          </Link>
          <Link to="/about-us" className="nav-item" onMouseEnter={() => setBrandModal(false)}>
            About Us
          </Link>
          <Link to="/contacts" className="nav-item" onMouseEnter={() => setBrandModal(false)}>
            Contacts
          </Link>
          <Link to="/blog" className="nav-item" onMouseEnter={() => setBrandModal(false)}>
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
