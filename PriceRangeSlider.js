// PriceRangeSlider.js
import React from 'react';

const PriceRangeSlider = ({ onRangeChange, values }) => {
  const handleSliderChange = (event) => {
    const newValue = event.target.valueAsNumber;
    onRangeChange(newValue);
  };

  return (
    <div>
      <label>Price Range:</label>
      <input
        type="range"
        min={0}
        max={400}
        step={1}
        value={values[0]}
        onChange={handleSliderChange}
      />
      <div>
        <span>Min: ${values[0]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
