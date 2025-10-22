import React, { useState } from "react";
import "../App.css";
import Footer from "../components/Footer";

const Categories = ({ cart, setCart, favorites, setFavorites }) => {
  const [toast, setToast] = useState("");

  const foodData = {
    Breakfast: [
      { id: "b1", name: "Pancakes & Syrup", price: 8.99, image: "https://images.unsplash.com/photo-1584270354949-1a69d3f8b1f5" },
      { id: "b2", name: "Egg & Toast", price: 6.99, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
      { id: "b3", name: "Avocado Toast", price: 7.49, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" },
      { id: "b5", name: "French Omelette", price: 9.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa3df606f" },
      { id: "b6", name: "Waffles & Berries", price: 10.49, image: "https://images.unsplash.com/photo-1604908177522-0404d98e2d57" },
    ],
    Lunch: [
      { id: "l1", name: "Jollof Rice & Chicken", price: 12.99, image: "https://images.unsplash.com/photo-1630418579725-16bfcfca4c7a" },
      { id: "l2", name: "Spaghetti Bolognese", price: 11.49, image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3" },
      { id: "l3", name: "Beef Burger", price: 10.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
      { id: "l4", name: "Fried Rice & Turkey", price: 13.99, image: "https://images.unsplash.com/photo-1652088181412-1c20f40894e8" },
      { id: "l6", name: "Yam Porridge", price: 9.49, image: "https://images.unsplash.com/photo-1625937753695-7f5a0d9e3dbf" },
    ],
    Dinner: [
      { id: "d1", name: "Grilled Salmon", price: 14.99, image: "https://images.unsplash.com/photo-1605475128013-65a3e60a3b2c" },
      { id: "d2", name: "Steak & Veggies", price: 16.49, image: "https://images.unsplash.com/photo-1612197527762-9a7d8b4b50e2" },
      { id: "d4", name: "Grilled Chicken Salad", price: 10.99, image: "https://images.unsplash.com/photo-1607330289190-b29f2d99c1f9" },
      { id: "d5", name: "Coconut Rice", price: 12.49, image: "https://images.unsplash.com/photo-1600688640183-66b47b9eaa1d" },
      { id: "d6", name: "Pepper Soup", price: 9.99, image: "https://images.unsplash.com/photo-1625938073237-788aaeced1c7" },
    ],
    Desserts: [
      { id: "de1", name: "Chocolate Cake", price: 5.99, image: "https://images.unsplash.com/photo-1599785209707-28b94b5e6e7b" },
      { id: "de2", name: "Vanilla Ice Cream", price: 4.99, image: "https://images.unsplash.com/photo-1627490834354-37a2c4b6e5bb" },
      { id: "de3", name: "Fruit Tart", price: 6.49, image: "https://images.unsplash.com/photo-1617196034796-73dfa3df606f" },
      { id: "de4", name: "Cupcakes", price: 5.49, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484b7" },
      { id: "de5", name: "Banana Split", price: 6.99, image: "https://images.unsplash.com/photo-1605475128013-65a3e60a3b2c" },
    ],
    Drinks: [
      { id: "dr1", name: "Smoothie", price: 4.49, image: "https://images.unsplash.com/photo-1589739906082-9e4d7a62e4b9" },
      { id: "dr2", name: "Chapman", price: 3.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa3df606f" },
      { id: "dr4", name: "Mojito", price: 4.99, image: "https://images.unsplash.com/photo-1589273479399-6cd1b4ca9cc4" },
      { id: "dr5", name: "Orange Juice", price: 3.49, image: "https://images.unsplash.com/photo-1577801591402-53ff61bafb17" },
      { id: "dr6", name: "Coffee", price: 3.99, image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df" },
    ],
    Snacks: [
      { id: "s1", name: "Meat Pie", price: 3.99, image: "https://images.unsplash.com/photo-1601050690597-cb6f4b6d28ff" },
      { id: "s3", name: "Samosa", price: 3.49, image: "https://images.unsplash.com/photo-1570741061378-3a9ad6f6d1c7" },
      { id: "s4", name: "Chicken Wings", price: 6.49, image: "https://images.unsplash.com/photo-1605475128013-65a3e60a3b2c" },
      { id: "s5", name: "Plantain Chips", price: 2.99, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484b7" },
      { id: "s6", name: "Spring Rolls", price: 4.49, image: "https://images.unsplash.com/photo-1625937772619-7f5a0d9e3dbf" },
    ],
  }; 

  const addToCart = (dish) => {
    const existing = cart.find((item) => item.id === dish.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }

    setToast(`${dish.name} added to cart!`);
    setTimeout(() => setToast(""), 2000);
  };

  const toggleFavorite = (dish) => {
    if (favorites.some((f) => f.id === dish.id)) {
      setFavorites(favorites.filter((f) => f.id !== dish.id));
    } else {
      setFavorites([...favorites, dish]);
    }
  };

  return (
    <div className="categories-page">
      {toast && <div className="toast">{toast}</div>}

      <h1>Explore Our Delicious Menu</h1>

      {Object.keys(foodData).map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          <div className="dish-grid">
            {foodData[cat].map((dish) => (
              <div key={dish.id} className="dish-card">
                <img src={dish.image} alt={dish.name} />
                <div className="dish-header">
                  <h4>{dish.name}</h4>
                  <span
                    className={`love-icon ${
                      favorites.some((f) => f.id === dish.id) ? "active" : ""
                    }`}
                    onClick={() => toggleFavorite(dish)}
                  >
                    ♥
                  </span>
                </div>
                <p>${dish.price}</p>
                <button onClick={() => addToCart(dish)}>Order</button>
              </div>
            ))}
          </div>
        </section>
      ))}

     
    </div>
  );
};

export default Categories;
