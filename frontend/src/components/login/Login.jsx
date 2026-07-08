import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import "./login.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [loading, setLoading] = useState(false);

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
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <img
            src={assets.cross_icon}
            alt="Close"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "SignUp" && (
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              value={data.Name}
              onChange={onChangeHandler}
              required
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            name="Email"
            value={data.Email}
            onChange={onChangeHandler}
            required
          />

          <input
            type="password"
            placeholder="Your Password"
            name="Password"
            value={data.Password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading
            ? "Please wait..."
            : currState === "SignUp"
            ? "Create Account"
            : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the Terms of Use and Privacy Policy.
          </p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;