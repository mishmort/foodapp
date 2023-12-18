
import React from 'react';
import foodImage from './foodbasic.jpg';
import subImage from './subway.jpg';
import mickelImage from './mickel.jpg';
import williamImage from './william.jpg';

import './today_offer.css'; //

const places = [
  { name: "Food Basics", rating: 4.2, time: "20–25 min", image: foodImage },
  { name: 'Subway', rating: 4.6, time: '20–25 min', image: subImage },
  { name: "William Fresh Cafe", rating: 4.5, time: '30–40 min', image:williamImage },
  { name: 'Mickel Coffee Shop', rating: 4.3, time: '25–40 min', image: mickelImage },
];

const TodayOffer = () => {
  return (
    <div className="popular-places-container">
      <h3>Today's Offer</h3>
      <div className="places-list">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} className="place-card-image" />
            <div className="place-info">
              <h3>{place.name}</h3>
              <span className="rating">{place.rating}</span>
              <span className="time">{place.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayOffer;
