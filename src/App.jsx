import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Conditions from "./components/Conditions/Conditions";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <div className="container">
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms_and_conditions" element={<Conditions />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
