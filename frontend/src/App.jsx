
import React, { useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-top/ScrollToTop";

import Home from "./pages/home/Home";
import Order from "./pages/orders/Order";
import Cart from "./pages/cart/Cart";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/myorders/MyOrders";

import Login from "./components/login/Login";

import BlogDetail from "./pages/blogdetail/BlogDetail";
import Blogs from "./pages/blogdetail/blogpage/Blogs";

import ToyMenu from "./pages/toymenu/ToyMenu";
import Contact from "./pages/contact/contact";
import Welcome from "./pages/welcome/Welcome";

import { ToastContainer } from "react-toastify";

import { StoreContext } from "./context/StoreContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const { token } = useContext(StoreContext);

  return (
    <>
      {/* ================= LOGIN MODAL ================= */}

      {showLogin && (
        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
      )}

      <ScrollToTop />

      <div className="app">

        {/* ================= TOAST ================= */}

        <ToastContainer
          position="top-center"
          style={{ zIndex: 10000 }}
          autoClose={2000}
        />

        {/* ================= NAVBAR ================= */}

        <Navbar
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />

        <div style={{ width: "80%", margin: "auto" }}>

          <Routes>

            {/* ================= PUBLIC ROUTES ================= */}

            <Route
              path="/welcome"
              element={
                <Welcome
                  setShowLogin={setShowLogin}
                />
              }
            />

            <Route
              path="/blogs"
              element={<Blogs />}
            />

            <Route
              path="/blogs/:id"
              element={<BlogDetail />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />


            {/* ================= HOME ================= */}

            <Route
              path="/"
              element={
                token ? (
                  <Home />
                ) : (
                  <Navigate to="/welcome" replace />
                )
              }
            />


            {/* ================= PROTECTED ROUTES ================= */}

            <Route element={<ProtectedRoute />}>

              <Route
                path="/menu"
                element={<ToyMenu />}
              />

              <Route
                path="/orders"
                element={<Order />}
              />

              <Route
                path="/cart"
                element={<Cart />}
              />

              <Route
                path="/verify"
                element={<Verify />}
              />

              <Route
                path="/myorders"
                element={<MyOrders />}
              />

            </Route>


            {/* ================= FALLBACK ================= */}

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

        </div>

        <Footer />

      </div>
    </>
  );
};

export default App;
