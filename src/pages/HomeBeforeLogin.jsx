import React from "react";
import { Link } from "react-router-dom";

const HomeBeforeLogin = () => {
  return (
    <div className="page">
      <h1>Welcome to TastyHub 🍕</h1>
      <p>Order your favorite meals with ease and speed!</p>
      <div className="btn-group">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/login" className="btn-outline">Login</Link>
      </div>
    </div>
  );
};

export default HomeBeforeLogin;
