import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <div className="card-container">
        {userData.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
