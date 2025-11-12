import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
 import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
 
import Dashboard from "./pages/Dashboard"; // ✅ add this

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ added */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
