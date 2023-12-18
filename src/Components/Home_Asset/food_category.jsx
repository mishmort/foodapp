
import React, { useRef } from 'react';
import './food_category.css';

const foodCategories = [
   'Fast Food', 'Coffee', 'Sushi', 'Soup',
  'Healthy', 'Chinese', 'Bubble Tea',
  'Vegan', 'Korean','Halal', 'Sandwich'
];

const FoodCategories = () => {
  const scrollContainer = useRef(null);

  return (
    <div className="food-categories-container">
    
      <div className="food-categories" ref={scrollContainer}>
        {foodCategories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
