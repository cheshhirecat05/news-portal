import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Global News Portal</h2>
      <ul style={styles.menu}>
        <li><Link to="/">News</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><a href="/contact">Contact</a></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <input type="text" placeholder="Search news..." style={styles.search}/>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "10px 20px"
  },
  logo: { margin: 0 },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
  },
  search: {
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  }
};

export default Navbar;
