import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Global News Portal. All rights reserved.</p>
      <p>
        Follow us:
        <a href="https://facebook.com" style={styles.link}> Facebook </a>|
        <a href="https://twitter.com" style={styles.link}> Twitter </a>|
        <a href="https://instagram.com" style={styles.link}> Instagram</a>
      </p>
      <p>Contact: info@globalnewsportal.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "20px",
    textAlign: "center"
  },
  link: {
    color: "lightblue",
    margin: "0 5px",
    textDecoration: "none"
  }
};

export default Footer;
