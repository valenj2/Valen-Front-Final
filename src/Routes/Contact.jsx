import React from "react";
import Form from "../Components/Form";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "contact-dark" : "contact-light"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
