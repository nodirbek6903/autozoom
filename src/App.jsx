import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Conditions from "./components/Conditions/Conditions";
import { Cars } from "./components/Cars/Cars";
import { FilteredCarsProvider } from "./components/Cars/CarsProvider/CarsProvider";

function App() {
  return (
    <>
      <div className="container">
        <FilteredCarsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms_and_conditions" element={<Conditions />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </FilteredCarsProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
