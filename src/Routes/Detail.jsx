import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error("Error dentist details:", error));
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentist && (
        <div>
          <h2>Name: {dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      )}
      ;
    </>
  );
};

export default Detail;
