
import React from 'react';
import mcdImage from './mcd.jpg';
import starImage from './starbucks.jpg';
import timsImage from './tims.jpg';
import bagelImage from './bagel.jpg';
import './frequent_visit.css'; //

const places = [
  { name: "McDonald's", rating: 4.4, time: "10–20 min", image: mcdImage },
  { name: 'Starbucks', rating: 4.7, time: '10–20 min', image: starImage },
  { name: "Tim Horton's", rating: 4.3, time: '20–35 min', image:timsImage },
  { name: 'Old Bagel House', rating: 4.7, time: '25–40 min', image: bagelImage },
];

const FrequentVisit = () => {
  return (
    <div className="popular-places-container">
      <h3>Frequent Visit</h3>
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

export default FrequentVisit;
