import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    
    
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to = '/add-product'   className={({ isActive }) =>
    isActive ? "sidebar-option active" : "sidebar-option"} >
                <img src = {assets.add_icon} alt =  "" />
                <p>Add Items</p>
            </NavLink>
            <NavLink  to = '/list-product'   className={({ isActive }) =>
    isActive ? "sidebar-option active" : "sidebar-option"
  }>
                <img src = {assets.order_icon} alt =  "" />
                <p>List Items</p>
            </NavLink>

            <NavLink  to = '/orders'   className={({ isActive }) =>
    isActive ? "sidebar-option active" : "sidebar-option"
  }>
                <img src = {assets.order_icon} alt =  "" />
                <p>Orders</p>
            </NavLink>
        </div>

    </div>
  )
}

export default Sidebar