import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import "../App.css";


const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About <span>Tasty Hub</span></h1>
          <p>
            At Tasty Hub, we blend flavor and passion to serve meals that make every bite unforgettable. 
            Whether it’s breakfast, lunch, or dinner — every dish is crafted with love and the freshest ingredients. 
            Your satisfaction is our top priority, and we strive to deliver an unforgettable dining experience both online and in-store.
          </p>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="About Tasty Hub"
          />
        </div>
      </section>

      {/* Contact + Branch Section */}
      <section className="about-contact">
        <div className="contact-card">
          <h2>📍 Our Branches</h2>
          <p>Abuja • Lagos • Port Harcourt • Ibadan</p>
        </div>

        <div className="contact-card">
          <h2>📞 Contact Us</h2>
          <p>Email: support@tastyhub.com</p>
          <p>Phone: +234 901 906 7034</p>
        </div>
      </section>

      {/* Comment Section */}
      <section className="comments-section">
        <h2>💬 What Our Customers Say</h2>
        <div className="comment-box">
          <div className="comment">
            <strong>Mary A.</strong>
            <p>“Best meals I’ve had in a long time! Love the smooth ordering process.”</p>
          </div>
          <div className="comment">
            <strong>David K.</strong>
            <p>“Very tasty and always delivered hot! Highly recommend Tasty Hub.”</p>
          </div>
        </div>

        <form className="comment-form">
          <textarea placeholder="Leave your comment..." required></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </section>

      {/* Social Links */}
      <section className="social-links">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <a href="https://wa.me/2349019067034" target="_blank" rel="noreferrer">
            <FaWhatsapp className="social-icon whatsapp" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            <FaTiktok className="social-icon tiktok" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
