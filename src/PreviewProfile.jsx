import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EditUser.css'; 
import Navbar from './Navbar';

function PreviewProfile() {
  const [user, setUser] = useState({
    user_name: '',
    email: '', 
    phone_number: '',
    bio: ''
  });

  useEffect(() => {

    axios.get('/api/user-details')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.phone_number.length !== 10) {
      alert('Phone number must be 10 digits.');
      return;
    }
    axios
      .post('/api/edit-user', user)
      .then(function (response) {
        console.log(response.data);
        setUser({
          ...user,
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
              disabled 
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
              disabled              
            />
          </div>
          <div className="inputContainerEU">
            <label>Bio:</label>
            <input
              type="text"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              disabled 
            />
          </div>
        </div>
        <div className="submitContainerEU">
          <Link to="/dashboard" className="backEU">
            Back
          </Link>
          <Link to="/edit-profile" className="editEU">
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
}

export default PreviewProfile;
