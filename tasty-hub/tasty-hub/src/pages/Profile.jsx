import React, { useEffect, useState } from "react";
import "../App.css";

function Profile({ setIsLoggedIn }) {
 
  const [user, setUser] = useState({
    fullname: "Emmanuel Bada",
    email: "badaemma460@gmail.com",
    gender: "male", 
  });


  const getFirstName = (fullname) => fullname.split(" ")[0];

  
  const avatars = {
    male: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    female: "https://cdn-icons-png.flaticon.com/512/4333/4333600.png",
    unisex: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  };

  
  const [orders, setOrders] = useState([
    { id: 1, item: "Grilled Chicken Deluxe", date: "Oct 10, 2025", status: "Delivered" },
    { id: 2, item: "Pasta Alfredo", date: "Oct 12, 2025", status: "Delivered" },
    { id: 3, item: "Chocolate Milkshake", date: "Oct 18, 2025", status: "Pending" },
  ]);

 
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
       
        <div className="profile-info">
          <img
            src={avatars[user.gender] || avatars.unisex}
            alt="User avatar"
            className="profile-avatar"
          />
          <h2>{getFirstName(user.fullname)}</h2>
          <p>{user.email}</p>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

      
        <div className="profile-history">
          <h3>Order History</h3>
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <span className="order-name">{order.item}</span>
                <span className="order-date">{order.date}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
