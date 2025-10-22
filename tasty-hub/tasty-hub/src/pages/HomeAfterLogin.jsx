import React, { useState, useEffect } from "react";
import "../App.css";


function HomeAfterLogin() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
      text: "Delicious Meals, Freshly Made",
    },
    {
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      text: "Savor the Taste of Quality",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      text: "Fast Delivery, Exceptional Taste",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-after">
     
      <section className="home-hero">
        <div
          className="hero-slide"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          <div className="hero-overlay">
            <h1>{slides[current].text}</h1>
            <p>Welcome to TastyHub — your favorite meal destination 🍴</p>
          </div>
        </div>
      </section>

      
      <section className="home-categories fade-in">
        <h2>Explore Our Categories</h2>
        <p>From spicy local dishes to international cuisines, we’ve got it all!</p>
        <div className="category-cards">
          {["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"].map((cat, index) => (
            <div className="category-card" key={index}>
              <h3>{cat}</h3>
              <p>Delicious {cat.toLowerCase()} options for every craving.</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="home-about fade-in-delay-1">
        <h2>About TastyHub</h2>
        <p>
          TastyHub brings you a world of flavor at your fingertips. From freshly
          prepared dishes to quick doorstep delivery, we make dining delightful.
        </p>
        <a href="/about" className="btn">Learn More</a>
      </section>


<section className="new-upcoming fade-in-delay-2">
  <h2 className="section-title">🍽️ New & Upcoming Dishes</h2>
  <div className="upcoming-grid">
    <div className="upcoming-card">
      <img src="/images/new1.jpg" alt="Dish 1" />
      <h3>Spicy Grilled Chicken</h3>
      <p>Bold, smoky, and unforgettable. Coming soon to Tasty Hub!</p>
    </div>
    <div className="upcoming-card">
      <img src="/images/new2.jpg" alt="Dish 2" />
      <h3>Avocado Smoothie</h3>
      <p>Refreshing blend of creamy avocado and tropical fruits.</p>
    </div>
    <div className="upcoming-card">
      <img src="/images/new3.jpg" alt="Dish 3" />
      <h3>Cheesy Shrimp Pasta</h3>
      <p>Rich, indulgent, and bursting with flavor — your next favorite.</p>
    </div>
  </div>
</section>


<section className="stay-updated fade-in-delay-3">
  <div className="update-content">
    <h2>Stay Updated!</h2>
    <p>
      Get the latest recipes, exclusive discounts, and tasty news delivered right to your inbox.
    </p>
    <form className="update-form">
      <input type="email" placeholder="Enter your email..." required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>

     
    </div>
  );
}

export default HomeAfterLogin;
