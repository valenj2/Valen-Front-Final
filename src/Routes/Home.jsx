import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error("Error dentists:", error));
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
