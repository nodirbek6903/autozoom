import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Conditions from "./components/Conditions/Conditions";
import Blog from "./components/Blog/Blog";
import BlogInfo from "./components/BlogInfo/BlogInfo";

function App() {
  return (
    <>
      <div className="container">
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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
