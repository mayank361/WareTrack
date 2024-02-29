import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink('');
  };
  return (
    <nav>
      <Link to="/dashboard">
        <img className="logonb" src={logo} alt="" />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link
              to="/dashboard"
              className={activeLink === '/dashboard' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/dashboard')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Dashboard{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/add-product"
              className={activeLink === '/add-product' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/add-product')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Add Product{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/view-profile"
              className={activeLink === '/view-profile' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/view-profile')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              View Profile{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className={activeLink === '/account' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/account')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Account{" "}
            </Link>
          </li>
          <li>
            <Link to="/" className="normal" onMouseEnter={() => handleMouseEnter('/')}
              onMouseLeave={handleMouseLeave}>
              {" "}
              Logout{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
