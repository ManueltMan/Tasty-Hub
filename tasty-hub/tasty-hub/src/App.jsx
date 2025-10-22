import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBeforeLogin from "./pages/HomeBeforeLogin";
import HomeAfterLogin from "./pages/HomeAfterLogin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import OrderConfirmation from "./pages/OrderConfirmation";
import "./App.css";

// ✅ Footer visibility wrapper
function AppContent({ isLoggedIn, setIsLoggedIn, cart, setCart, favorites, setFavorites }) {
  const location = useLocation();

  // Hide footer on these routes:
  const hideFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter =
  !hideFooterRoutes.includes(location.pathname) &&
  !(location.pathname === "/" && !isLoggedIn);


  // ✅ Fade-in animation effect
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart={cart} />

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<HomeBeforeLogin />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomeAfterLogin />} />
            <Route
              path="/categories"
              element={
                <Categories
                  cart={cart}
                  setCart={setCart}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {/* ✅ Only show footer on selected pages */}
      {shouldShowFooter && <Footer />}
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cart={cart}
        setCart={setCart}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </Router>
  );
}

export default App;
