import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorite = { id, name, username };
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, newFavorite])
    );
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      {/*página de detalle*/}
      <Link to={`/dentist/${id}`}>Ver detalle</Link>
      {/* favoritos*/}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
