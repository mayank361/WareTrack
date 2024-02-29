import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css';
import mail from './mail.png'
import key from './key.png';

const Login = () =>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        console.log(formData);
      
        axios
      .post("http://localhost:5000/api/users/login", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData({
      email: "",
      password: "",
    });
  };



return(
    <form onSubmit={handleSubmit}>
    <div className="page">
    <div className="container">
        <div className="header">
            <div className="text">LogIn</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <image src={ mail } alt=" " > </image>
                <input type="email"  name="email"
                value={formData.email}
                onChange={handleChange}
                 placeholder="Email"></input>
            </div>
            <div className="input">
                <image src={key} alt=" " ></image>
                <input type="password" name="password"
                value={formData.password}
                onChange={handleChange}
                 placeholder="Password"></input>
            </div>
        </div>
        <div className="forgot">Forgot <span><Link to="/forgot-password">password </Link></span> ? </div>
        <div className="dont">Don't have account ? <span><Link to="/signup" >SignUp</Link></span></div>
        <div className="submitContainer">
          <Link to="/dashboard">
            <button className="submit" typeof="submit">LogIn</button>
            </Link>
            </div>
    </div>
    </div>
    </form>
);

}
export default Login;