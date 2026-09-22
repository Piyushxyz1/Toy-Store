import { Children, createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const url = import.meta.env.VITE_API_URL || "http://localhost:5000";
  console.log("API URL =", import.meta.env.VITE_API_URL);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const getlist = await axios.get(url + "/api/toys/lists");
    console.log(getlist);
    setList(getlist.data);
  };

  const fetchCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/getcart",
      {},
      { headers: { token } },
    );
    console.log(response.data);
    setCartItems(response.data.getCartDetails);
  };

  const totalAmount = () => {
    let totalPrice = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let product = list.find((p) => p._id === item);

        if (product) {
          totalPrice += product.Price * cartItems[item];
        }
      }
    }

    return totalPrice;
  };

  useEffect(() => {
    async function loaditems() {
      await fetchList();

      const savedToken = localStorage.getItem("token");

      if (savedToken) {
        await fetchCartData(savedToken);
      }
    }

    loaditems();
  }, []);

  const addToCart = async (itemId) => {
    if (!token) {
      toast.error(
        "Please Create and account or login to add products in the cart",
      );
      return;
    }

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success("item added to cart")
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("item added to cart")
    }

    if (token) {
      await axios.post(
        url + "/api/cart/addtocart",
        { itemId },
        { headers: { token } },
      );
    }
  };

  const removeFromCart = async (itemId) => {
    if (!token) {
      toast.error("Please Create and account or login to continue");

      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/removefromcart",
        { itemId },
        { headers: { token } },
      );
      toast.success("item removed from cart")
    }
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalAmount,
    url,
    token,
    setToken,
    list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
