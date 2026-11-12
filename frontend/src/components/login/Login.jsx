
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./login.css";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const { url, setToken } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        currState === "Login"
          ? "/api/users/login"
          : "/api/users/signup";

      const payload =
        currState === "Login"
          ? {
              Email: data.Email,
              Password: data.Password,
            }
          : data;

      const response = await axios.post(url + endpoint, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        toast.success(response.data.message, {
          autoClose: 3000,
        });

        setData({
          Name: "",
          Email: "",
          Password: "",
        });

        setShowLogin(false);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <button
          type="button"
          className="login-close"
          onClick={() => setShowLogin(false)}
          aria-label="Close login popup"
        >
          <img src={assets.cross_icon} alt="" />
        </button>

        <div className="login-brand">
          <span className="login-brand-mark">T</span>
          <span className="login-brand-name">
            TOY<span>VERSE</span>
          </span>
        </div>

        <div className="login-popup-title">
          <span className="login-eyebrow">
            {currState === "Login"
              ? "WELCOME BACK"
              : "YOUR NEXT ADVENTURE STARTS HERE"}
          </span>

          <h2>
            {currState === "Login"
              ? "Sign in to continue."
              : "Join the fun."}
          </h2>

          <p className="login-subtitle">
            {currState === "Login"
              ? "Ready to play? Sign in and pick up where your adventure left off."
              : "Create your account and discover a world of toys, games and imagination."}
          </p>
        </div>

        <div className="login-popup-inputs">
          {currState === "SignUp" && (
            <div className="login-field">
              <label htmlFor="login-name">Your name</label>
              <input
                id="login-name"
                type="text"
                placeholder="Enter your name"
                name="Name"
                value={data.Name}
                onChange={onChangeHandler}
                required
              />
            </div>
          )}

          <div className="login-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              name="Email"
              value={data.Email}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              name="Password"
              value={data.Password}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <button
          className="login-submit"
          type="submit"
          disabled={loading}
        >
          <span>
            {loading
              ? "Please wait..."
              : currState === "SignUp"
              ? "Create your account"
              : "Sign in to your account"}
          </span>
          {!loading && <span className="login-submit-arrow">↗</span>}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" id="login-terms" required />
          <label htmlFor="login-terms">
            I agree to the{" "}
            <span className="link-text">Terms of Use</span> and{" "}
            <span className="link-text">Privacy Policy</span>
          </label>
        </div>

        <div className="login-switch">
          {currState === "Login" ? (
            <p>
              New to ToyVerse?
              <button
                type="button"
                onClick={() => setCurrState("SignUp")}
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                type="button"
                onClick={() => setCurrState("Login")}
              >
                Sign in
              </button>
            </p>
          )}
        </div>

        <div className="login-footer-note">
          MADE FOR LITTLE MOMENTS & BIG IMAGINATIONS
        </div>
      </form>
    </div>
  );
};

export default Login;
