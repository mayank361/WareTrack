import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
const Buttons = () => {
  return (
    <div className="buttonsLP">
      <Link to="/signup">
        <button className="signUpLP">Sign-Up</button>
      </Link>
      <Link to="/login">
        <button className="logInLP">LogIn</button>
      </Link>
    </div>
  );
};
export default Buttons;
