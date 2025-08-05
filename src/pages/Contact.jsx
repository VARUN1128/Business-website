import React, { useState } from "react";

const styles = {
  centerCol: {
    maxWidth: 420,
    margin: "40px auto",
    padding: 24,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
    textAlign: "center"
  },
  label: {
    display: "block",
    textAlign: "left",
    fontWeight: 600,
    marginBottom: 5,
    fontSize: 15,
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: 15,
    fontSize: 15,
    border: "1px solid #dadada",
    borderRadius: 5,
    outline: "none",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    minHeight: 70,
    padding: "10px 12px",
    fontSize: 15,
    border: "1px solid #dadada",
    borderRadius: 5,
    marginBottom: 20,
    resize: "vertical",
    outline: "none"
  },
  submit: {
    background: "linear-gradient(90deg,#ffa900,#ffb947)",
    color: "#fff",
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    padding: "11px 22px",
    borderRadius: 5,
    cursor: "pointer",
    display: "block",
    margin: "0 auto"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Your API call or handler here
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    });
  }

  return (
    <div>
      <h2 style={{ color: "#ff9900", marginTop: 26, textAlign: "center", fontSize: 32, fontWeight: 700 }}>
        Contact
      </h2>
      <form style={styles.centerCol} onSubmit={handleSubmit} autoComplete="off">
        <label style={styles.label} htmlFor="name">Full Name*</label>
        <input
          style={styles.input}
          id="name"
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />

        <label style={styles.label} htmlFor="email">Email*</label>
        <input
          style={styles.input}
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label style={styles.label} htmlFor="whatsapp">WhatsApp (optional)</label>
        <input
          style={styles.input}
          id="whatsapp"
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp number"
          value={formData.whatsapp}
          onChange={handleChange}
        />

        <label style={styles.label} htmlFor="message">Your Message</label>
        <textarea
          style={styles.textarea}
          id="message"
          name="message"
          required
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" style={styles.submit}>Submit</button>
      </form>
    </div>
  );
}
