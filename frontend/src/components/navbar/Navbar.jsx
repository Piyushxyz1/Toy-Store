import React, { useContext, useState } from "react";
import "./navbar.css";

import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin, showLogin }) => {
  const [menu, setMenu] = useState("home");

  const { totalAmount, token, setToken } =
    useContext(StoreContext);

  const navigate = useNavigate();

  /* =========================================================
     LOGOUT
  ========================================================= */

  const logout = () => {
    localStorage.removeItem("token");

    setToken("");

    navigate("/");

    toast.success("Logged out successfully");
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */


  const handleContactClick = () => {
    setMenu("contact");

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById("footer")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <Link
        to="/"
        className="logo-link"
        onClick={() => setMenu("home")}
      >
        <div className="toy-logo-css">

          <div className="toy-block">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <span className="brand-name">
            ToyStore
          </span>

        </div>
      </Link>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div className="navbar-menu">

        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>

        <Link
          to="/menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </Link>

        <Link to = "/blogs"
          className={`nav-link-button ${
            menu === "blog" ? "active" : ""
          }`}
           onClick={() => setMenu("blog")}
        >
          Blogs
        </Link>

        <Link to = '/contact'
          className={`nav-link-button ${
            menu === "contact" ? "active" : ""
          }`}
           onClick={() => setMenu("contact")}
        >
          Contact
        </Link>

      </div>


      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

      <div className="navbar-right">

        {/* CART */}

        <div className="navbar-cart-icon">

          <Link to="/cart">

            <img
              src={assets.basket_icon}
              alt="Cart"
            />

            {totalAmount() > 0 && (
              <span className="cart-dot"></span>
            )}

          </Link>

        </div>


        {/* =================================================
            AUTH
        ================================================= */}

        {!token ? (

          <button
            className="navbar-signin"
            onClick={() => setShowLogin(!showLogin)}
          >
            Sign In
          </button>

        ) : (

          <div className="navbar-profile">

            <button className="profile-button">

              <img
                src={assets.profile_icon}
                alt="Profile"
              />

            </button>


            {/* PROFILE DROPDOWN */}

            <ul className="nav-profile-dropdown">

              <li
                onClick={() => navigate("/myorders")}
              >
                <img
                  src={assets.bag_icon}
                  alt=""
                />

                <p>Orders</p>
              </li>

              <hr />

              <li onClick={logout}>

                <img
                  src={assets.logout_icon}
                  alt=""
                />

                <p>Logout</p>

              </li>

            </ul>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;