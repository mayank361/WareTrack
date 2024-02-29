import 'VirNavbar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink('');
  };
  return (
    <nav className='Vnav'>
        <ul id="Vnavbar">
          <li>
            <Link
              to="/view-profile"
              className={activeLink === '/view-profile' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/view-profile')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              View User Profile{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/edit-profile"
              className={activeLink === '/edit-profile' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/edit-profile')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Edit User Profile{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/pass-change" 
              className={activeLink === '/pass-change' ? 'active' : 'normal'}
              onMouseEnter={() => handleMouseEnter('/pass-change')}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              Change Password{" "}
            </Link>
          </li>
        </ul>
    </nav>
  );
}
export default Navbar;