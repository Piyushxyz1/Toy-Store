import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./login.css"
import { useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
import { toast } from 'react-toastify';

const Login = ({ setShowLogin, Login }) => {

    const [currState, setCurrState] = useState("Login");
    const  [data,setData] = useState({
        Name: "",
        Email: "",
        Password:""
    })
     const {url,setToken} = useContext(StoreContext)

const onChangeHandler=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const onLogin = async (e) => {

  e.preventDefault();

  let response;

  if (currState === "Login") {

    response = await axios.post(
      `${url}/api/users/login`,
      {Email:data.Email,Password:data.Password}
    );

  } else {

    response = await axios.post(
      `${url}/api/users/signup`,
      data
    );
  }

  if (response.data.success) {    //response.data is res.json that we get from backend
    setToken(response.data.token)
    localStorage.setItem("token",response.data.token)   
    toast.success(response.data.message, {
  autoClose: 3000});
    setShowLogin(false);
console.log(response)
  }

  else{

    toast.error(response.data.message);
  }
}


    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? "": <input type="text" placeholder='Your Name' name = "Name" value={data.Name} onChange={onChangeHandler} required />}
                    <input type="email" placeholder='Your email' name = "Email" value={data.Email} onChange={onChangeHandler} required />
                    <input type="password" placeholder='Your password' name = "Password" value={data.Password} onChange={onChangeHandler} required />
                </div>
                <button type='submit'>{currState === "SignUp" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing ,I agree to the terms of use & privacy policy</p>
                </div>

                {currState === "Login" ? <p>Create a new Account ?<span onClick={()=>setCurrState("SignUp")}>Click here</span ></p> : <p>Already have an account ?<span onClick={()=>setCurrState("Login")}>Login</span></p>}


            </form>
        </div>
    )
}

export default Login