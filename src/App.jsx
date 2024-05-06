import { Route, Routes } from "react-router-dom";
import Conditions from "./components/Conditions/Conditions";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ParamsCars from "./components/ParamsCars/Params-cars";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Faqs from "./components/Faqs/Faqs";
import Services from "./components/Services/Services";
import ServicePlans from './components/Services/ServicePlans/ServicePlans';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  const { i18n } = useTranslation();

  const savedLanguage = localStorage.getItem("language");
  useEffect(() => {
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    }
  }, [savedLanguage]);
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carsinfo/:id" element={<ParamsCars />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms_and_conditions" element={<Conditions />} />
          <Route path="/blog_info/:id" element={<BlogInfo />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:link" element={<ServicePlans />} />
          <Route path="about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
