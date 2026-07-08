import React, { useState } from 'react';
import "./exploremenu.css";
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <div className="explore-menu-header">
        <span className="explore-menu-badge">Our Collection</span>
        <h2>Explore Our <span className="highlight">Premium</span> Menu</h2>
        <p className='explore-menu-text'>
          Discover handpicked toys designed to spark creativity and joy in every child
        </p>
      </div>

      <div className="explore-menu-list">
        {menu_list.map((items, index) => {
          const isActive = category === items.menu_name;
          return (
            <div
              className={`explore-menu-item ${isActive ? 'active' : ''}`}
              key={index}
              onClick={() => setCategory(isActive ? "all" : items.menu_name)}
            >
              <div className="menu-item-image-wrapper">
                <img
                  src={items.menu_image}
                  alt={items.menu_name}
                  className="menu-item-image"
                />
                {isActive && <div className="active-indicator"></div>}
              </div>
              <p className="menu-item-name">{items.menu_name}</p>
              {isActive && <div className="menu-item-underline"></div>}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ExploreMenu;