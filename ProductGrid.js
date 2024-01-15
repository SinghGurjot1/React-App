// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductCard from './ProductCard';
import PriceRangeSlider from './PriceRangeSlider'; // Import the new PriceRangeSlider component
import products from './products';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortOption, setSortOption] = useState('price-asc');
  const [priceRange, setPriceRange] = useState(0); // Default price range

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handlePriceRangeChange = (newValue) => {
    setPriceRange(newValue);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      // ... sorting logic
    }
  });

  const filteredAndSortedProducts = sortedProducts.filter(
    (product) => product.price <= maxPrice && product.price >= priceRange
  );

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {/* ... options for sorting */}
        </select>
      </div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <PriceRangeSlider onRangeChange={handlePriceRangeChange} values={[priceRange]} />
      <div className="products">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
