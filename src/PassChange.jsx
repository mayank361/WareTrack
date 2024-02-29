import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './PassChange.css';
import key from './key.png';

function PassChange() {
  const [formData, setFormData] = useState({
    Password: "",
    newPassword: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }
    delete formData.confirm_password;
    axios.post("/api/change-password", formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error changing password:", error);

      });
  };

  return (
    <div className="pagePc">
      <div className="containerPc">
        <div className="headerPc">
          <div className="textPc">Password Reset</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputsPc">
            <div className="tittlePc">Old Password:</div>
            <div className="inputPc">
              
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Old Password"
                required
              />
            </div>
            <div className="tittlePc">New Password:</div>
            <div className="inputPc">
              
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                required
              />
            </div>
            <div className="tittlePc">New Password again:</div>
            <div className="inputPc">
             
              <input
                type="password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="submitContainerPc">
          <Link to="/login">
            <input className="submitPc" type="submit" value="Submit" /></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassChange;
