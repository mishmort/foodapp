import MainButton from "../../Components/MainButton/MainButton";
import FoodCategories from "../../Components/Home_Asset/food_category";
import PopupBox from "../../Components/Home_Asset/pop_up";
import PopularPlaces from "../../Components/Home_Asset/places";
import TodayOffer from "../../Components/Home_Asset/today_offer";
import Filter from "../../Components/Home_Asset/filter";
import FrequentVisit from "../../Components/Home_Asset/frequent_visit";
import { useState } from "react";
import "./home.css";

const ContainerStyle = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  marginBottom: '20px'
};

const Home = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  return (
    <div className="home">
      <div className="category">
      <FoodCategories></FoodCategories>
      </div>
      <button style={{backgroundColor: "#203c32", color:"#ffe7bf", borderRadius:"10px"}} onClick={() => setIsFilterVisible(!isFilterVisible)}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      <Filter isVisible={isFilterVisible} />

      <div style = {ContainerStyle}> 
      <PopularPlaces></PopularPlaces>
      </div>

      <div style = {ContainerStyle}> 
      <TodayOffer></TodayOffer>
      </div>
      
      <div style = {ContainerStyle}> 
      <FrequentVisit></FrequentVisit>
      </div>
    </div>
  );
};

export default Home;
