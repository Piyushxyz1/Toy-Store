// ToyMenu.js
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import FoodItems from "../../components/fooditems/FoodItems";
import "./Toymenu.css";

const ToyMenu = () => {
  const { list } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    }
  }, [location]);

  // Filter and sort items
  const getFilteredItems = () => {
    let filtered = list.filter((item) => {
      if (category === "all" || item.Category === category) {
        return item;
      }
      return null;
    });

    // Sort items
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.Price - b.Price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.Price - a.Price);
        break;
      case "name":
        filtered.sort((a, b) => a.Name.localeCompare(b.Name));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredItems = getFilteredItems();

  // Get unique categories for filter
  const categories = ["all", ...new Set(list.map((item) => item.Category))];

  return (
    <div className="menu-page">
      <div className="menu-page-header">
        <h1>Our Collection</h1>
        <p>Discover our amazing toy collection</p>
      </div>

      <div className="menu-controls">
        <div className="filter-section">
          <label>Category: </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="sort-section">
          <label>Sort by: </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      <div className="menu-stats">Showing {filteredItems.length} items</div>

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FoodItems key={index} id={item._id} item={item} />
          ))
        ) : (
          <div className="no-items">
            <p>Sorry, no items found currently.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToyMenu;
