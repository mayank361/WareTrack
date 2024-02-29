import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EditUser.css'; 
import Navbar from './Navbar';

function EditUser() {
  const [user, setUser] = useState({
    user_name: '',
    email: '', 
    phone_number: '',
    bio: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password.phone_number !== 10) {
        alert('Password must be 10 digits.');
        return;
      }
    axios
      .post('/api/edit-user', user)
      .then(function (response) {
        console.log(response.data);
        setUser({
          user_name: '',
          email: '',
          phone_number: '',
          bio: ''
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="containerEU">
      <div className="navaddEU"> <Navbar/> </div>
      <div className="titleEU">Edit User Details</div>
      <form onSubmit={handleSubmit}>
        <div className="detailsContainerEU">
          <div className="inputContainerEU">
            <label>User Name:</label>
            <input
              type="text"
              name="user_name"
              value={user.user_name}
              onChange={handleChange}
              placeholder="Enter user name"
            />
          </div>
          <div className="inputContainerEU">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              disabled 
            />
          </div>
          <div className="inputContainerEU">
            <label>Phone Number (+91):</label>
            <input
              type="number"
              name="phone_number"
              value={user.phone_number}
              onChange={handleChange}
              placeholder="Enter phone number (+91)"
            />
          </div>
          <div className="inputContainerEU">
            <label>Bio:</label>
            <input
              type="text"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              placeholder="Enter bio"
            />
          </div>
        </div>
        <div className="submitContainerEU">
            <Link to="/add-product">
          <button type="submit" className="submitEU">
            Save
          </button></Link>
          <Link to="/dashboard" className="cancelEU">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
