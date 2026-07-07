import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/orders/verify`, {
        success,
        orderId,
      });

      if (!response.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();

    const timer = setTimeout(() => {
      navigate("/myorders");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="verify">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h2>Payment Successful!</h2>

        <p>
          Thank you for your order. Your payment has been verified and your
          order has been placed successfully.
        </p>

        <p>Redirecting in a few seconds...</p>
      </div>
    </div>
  );
};

export default Verify;