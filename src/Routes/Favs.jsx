import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((favorite, index) => (
          <Card
            key={index}
            name={favorite.name}
            username={favorite.username}
            id={favorite.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
