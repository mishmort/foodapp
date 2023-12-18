import React, { useState } from 'react';

const Filter = ({ isVisible, toggleVisibility })  => {
    const initialFilters = {
        sort: '',
        price: '',
        dietary: []
      };
    
      const [filters, setFilters] = useState(initialFilters); // This line was missing
    
      const handleSortChange = (sortOption) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          sort: sortOption
        }));
      };
    
      const handlePriceChange = (priceOption) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          price: priceOption
        }));
      };
    
      const handleDietaryChange = (dietaryOption) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          dietary: prevFilters.dietary.includes(dietaryOption)
            ? prevFilters.dietary.filter((d) => d !== dietaryOption)
            : [...prevFilters.dietary, dietaryOption]
        }));
      };
    
      const clearFilters = () => {
        setFilters(initialFilters);
      };

  const filterContainerStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px'
  };

  const titleStyle = {
    color: '#203c32',
    fontWeight: 'bold'
  };

  const labelStyle = {
    display: 'block',
    margin: '5px 0',
    cursor: 'pointer'
  };

  const checkboxStyle = {
    marginRight: '10px'
  };

  const clearButtonStyle = {
    backgroundColor: '#203c32',
    color: '#ffe7bf',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const applyButtonStyle = {
    border: 'none',
    color: '#ffe7bf',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    backgroundColor: '#203c32',
    marginRight: '200px'
  }


  return (
    <div style={{ ...filterContainerStyle, display: isVisible ? 'block' : 'none' }}>
      <div>
        <h3 style={titleStyle}>Sort</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.sort === 'price'}
            onChange={() => handleSortChange('price')}
          />
          Price
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.sort === 'distance'}
            onChange={() => handleSortChange('distance')}
          />
          Distance
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.sort === 'rating'}
            onChange={() => handleSortChange('rating')}
          />
          Rating
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.sort === 'recommend'}
            onChange={() => handleSortChange('recommend')}
          />
          Recommend
        </label>
      </div>
      <div>
        <h3 style={titleStyle}>Price</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.price === '$'}
            onChange={() => handlePriceChange('$')}
          />
          $
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.price === '$$'}
            onChange={() => handlePriceChange('$$')}
          />
          $$
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.price === '$$$'}
            onChange={() => handlePriceChange('$$$')}
          />
          $$$
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.price === '$$$$'}
            onChange={() => handlePriceChange('$$$$')}
          />
          $$$$
        </label>
      </div>
      <div>
        <h3 style={titleStyle}>Dietary</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('halal')}
            onChange={() => handleDietaryChange('halal')}
          />
          Halal
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('vegan')}
            onChange={() => handleDietaryChange('vegan')}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('Vegetarian')}
            onChange={() => handleDietaryChange('Vegetarian')}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('Nut-free')}
            onChange={() => handleDietaryChange('Nut-free')}
          />
          Nut-free
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('gluten-free')}
            onChange={() => handleDietaryChange('gluten-free')}
          />
          Gluten-free
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.dietary.includes('Alcohol-free')}
            onChange={() => handleDietaryChange('Alcohol-free')}
          />
          Alcohol-free
        </label>
      </div>
      <button style={applyButtonStyle} >Apply Filter</button>
      <button style={clearButtonStyle} onClick={clearFilters}>Clear Filter</button>
    </div>
  );
};

export default Filter;
