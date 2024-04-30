import { Link } from "react-router-dom"
import "./Main.css"
import { CiCircleChevRight } from "react-icons/ci"
const Main = () => {
  return (
    <div className="main-container">
      <div className="main-card">
        <h2 className="main-title">TOP LUXURY CAR RENTAL DUBAI</h2>
        <p className="main-desc">
        Best sports car & supercar rental Dubai, Exclusive offers on luxury car rental Dubai Cheap price
        </p>
        <Link to="/cars" className="main-btn">RENT A CAR DUBAI CATALOG <CiCircleChevRight className="main-icon" /></Link>
      </div>
    </div>
  )
}

export default Main