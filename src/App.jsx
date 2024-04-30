import { Route, Routes } from "react-router-dom";
import Conditions from "./components/Conditions/Conditions";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import ParamsCars from "./components/ParamsCars/Params-cars";
function App() {
  return (
    <>
      <div className="container">
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carsinfo/:id" element={<ParamsCars />} />
            <Route path="/terms_and_conditions" element={<Conditions />} />
            
          </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
