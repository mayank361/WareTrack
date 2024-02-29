import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import Navbar from './Navbar';

function Account() {
  return (
    <div className="containerAc" >
        <Navbar/>
      <h1>Account Settings</h1>
      <div className="buttons">
        <Link to="/edit-profile">
          <button className="update-profile">Update Profile</button>
        </Link>
        <Link to="/pass-change">
          <button className="change-password">Change Password</button>
        </Link>
      </div>
    </div>
  );
}

export default Account;
