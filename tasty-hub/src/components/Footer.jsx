import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>TastyHub</h3>
        <p>Delicious meals. Fast delivery. Unforgettable taste.</p>
        <p>© {new Date().getFullYear()} TastyHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
