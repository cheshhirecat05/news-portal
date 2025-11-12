import React, { useState } from "react";

const Contact = ({ addMessage }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(formData); // send message to Dashboard
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
      <br />
      <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
      <br />
      <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
