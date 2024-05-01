import { Route, Routes } from "react-router-dom";
import Conditions from "./components/Conditions/Conditions";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ParamsCars from './components/ParamsCars/Params-cars';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import BlogInfo from './components/BlogInfo/BlogInfo';
function App() {
  return (
    <>
      <div className="container">
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carsinfo/:id" element={<ParamsCars />} />
            <Route path="/terms_and_conditions" element={<Conditions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms_and_conditions" element={<Conditions />} />
            <Route path="/blog_info/:id" element={<BlogInfo />} />

          </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
