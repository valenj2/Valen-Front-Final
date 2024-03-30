import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName.length < 5) {
      setError("Por favor, introduzca un nombre válido.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Por favor, introduzca un correo electrónico válido.");
      return;
    }

    console.log("Datos enviados:", formData);
    setSuccessMessage(
      `Gracias ${formData.fullName}, te contactaremos lo antes posible vía Email.`
    );

    setFormData({
      fullName: "",
      email: "",
    });
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
