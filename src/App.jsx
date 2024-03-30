import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DentistDetail from "./pages/DentistDetail";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/dentist/:id" component={DentistDetail} />
        <Route path="/favs" component={Favorites} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
