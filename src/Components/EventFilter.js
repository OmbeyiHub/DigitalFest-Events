// EventFilter.js
import React from 'react';

const EventFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category"></label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventFilter;

