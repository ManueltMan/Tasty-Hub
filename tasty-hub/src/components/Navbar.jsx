import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar = ({ isLoggedIn, cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const cartCount = cart.length;

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img
            src="/restuarant.png"
            alt="TastyHub Logo"
            className="nav-logo-img"
          />
          <span>TastyHub</span>
        </Link>


          {/* Nav Links (Desktop + Sidebar) */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/categories" onClick={closeMenu}>Categories</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>

            {isLoggedIn && (
              <li>
                <Link to="/profile" onClick={closeMenu}>
                  <FaUserCircle size={20} />
                </Link>
              </li>
            )}

            <li>
              <Link to="/cart" className="cart-icon" onClick={closeMenu}>
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>

          {/* Hamburger Toggle (mobile) */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
