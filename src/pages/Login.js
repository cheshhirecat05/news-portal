import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check, can be replaced with real auth
    if (email && password) {
      localStorage.setItem("loggedIn", true); // set login flag
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Enter email and password!");
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", width: "250px", margin: "100px auto" },
  input: { margin: "8px 0", padding: "8px" },
  button: { padding: "8px", background: "#1a1a1a", color: "white", border: "none", cursor: "pointer" }
};

export default Login;
