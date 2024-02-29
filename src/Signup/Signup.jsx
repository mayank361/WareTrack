import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import mail from "./mail.png";
import key from "./key.png";
import user from "./user.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    console.log(formData);
    if (formData.password !== formData.confirm_password) {
      alert("Password do not match!");
      return;
    }
   
    delete formData.confirm_password;
 
    axios
    .post("/api/signup", formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setFormData({
      user_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="page">
        <div className="container">
          <div className="header">
            <div className="text">Sign-Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <image src={user} alt=" ">
                {" "}
              </image>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Name"
                required
              ></input>
            </div>
            <div className="input">
              <image src={mail} alt=" ">
                {" "}
              </image>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="input">
              <image src={key} alt=" "></image>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                minLength="8"
                required
              ></input>
            </div>
          {/*}  <div className="input">
              <image src={key} alt=" "></image>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Confirm Password"
              ></input>
            </div>*/}
          </div>
          <div className="have">
            Already have account ?(' ') <span><Link to="/login">Login</Link></span>
          </div>
          <div className="submitContainer">
            <Link to="/edit-profile">
            <button className="submit" type="submit">
              Sign-up
            </button></Link>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
