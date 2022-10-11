import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Screens/about";
import Contact from "../Screens/contacts";
import Home from "../Screens/home";
import { Navbar} from "../components/navbar";
import { Menu } from "../Screens/menu";
import { Footer } from "../components/footer";
import Food from "../Screens/food";
import Order from "../Screens/order";



export default function AppRouter() {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="food" element={<Food />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
        </Routes>
        <Footer />
      </Router>

  );
}
