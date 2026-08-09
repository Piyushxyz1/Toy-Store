// ToyDisplay.js
import React, { useContext, useState } from 'react';
import './toydisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../fooditems/FoodItems';
import { useNavigate } from 'react-router-dom';

const ToyDisplay = ({ category }) => {
  const { list } = useContext(StoreContext);
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);
  const itemsPerPage = 9;

  // Filter items by category
  const filteredItems = list.filter(item => {
    if (category === "all" || item.Category === category) {
      return item;
    }
    return null;
  });

  // Get visible items
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  // Navigate to full menu page
  const handleViewAll = () => {
    navigate('/menu', { state: { category } });
  };

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-header">
        {filteredItems.length > itemsPerPage && (
          <button className="view-all-btn" onClick={handleViewAll}>
            View All ({filteredItems.length})
          </button>
        )}
      </div>

      <div className="food-display-list">
        {visibleItems.map((item, index) => (
          <FoodItems key={index} id={item._id} item={item} />
        ))}
      </div>

      {hasMore && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={()=>navigate("/menu")}>
            Load More
          </button>
          <span className="item-count">
            Showing {visibleCount} of {filteredItems.length} items
          </span>
        </div>
      )}
    </div>
  );
};

export default ToyDisplay;