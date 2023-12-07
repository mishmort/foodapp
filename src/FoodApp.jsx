
import "./foodapp.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import { Outlet } from "react-router-dom";


const FoodApp = () => {
  return (
    <div className="foodapp">
      <Nav></Nav>
      <div className="page">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}

export default FoodApp;
