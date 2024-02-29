import "./PassChange.css";
import { Link } from "react-router-dom";
import axios from "axios";
import mail from "./mail.png";
import React, { useState } from "react";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
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
    };
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    axios
      .post("/user", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData({
      email: "",
    });
  };

  return (
    <div className="pagePc">
      <div className="containerPc">
        <div className="headerPc">
          <h1>Password Resset</h1>
        </div>
        <div className="inputsPc">
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
          <div />
          <div className="submitContainer">
            <Link to="/email-notification">
              <button className="submit" type="submit">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
