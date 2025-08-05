// ContactForm.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";

const countryCodes = [
  { code: "+1", label: "USA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+91", label: "India +91" },
  { code: "+61", label: "Australia +61" },
  { code: "+81", label: "Japan +81" },
  // add more country codes as needed
];

const animationUrl =
  "https://lottie.host/a511d9cf-e81f-47dc-a37c-57eb6a79a77f/hxbuniJXKS.lottie";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here: e.g., send to backend or API
    console.log("Form submitted:", formData);
    // Clear form or give feedback as needed
  };

  return (
    <div style={styles.container}>
      <div style={styles.animationWrapper}>
        <Lottie 
          animationData={animationUrl} 
          loop={true} 
          style={{ height: 300, width: 300 }}
          path={animationUrl}
        />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label style={styles.label}>
          Name:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>
        <label style={styles.label}>
          WhatsApp:
          <div style={styles.whatsappWrapper}>
            <select
              style={{ ...styles.input, ...styles.countryCode }}
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
            >
              {countryCodes.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
            <input
              style={{ ...styles.input, ...styles.whatsappInput }}
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              placeholder="WhatsApp number"
            />
          </div>
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            style={{ ...styles.input, height: 100 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
          />
        </label>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    maxWidth: 900,
    margin: "auto",
    padding: 20,
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  animationWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 15,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
  },
  input: {
    padding: 10,
    fontSize: 16,
    marginTop: 6,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  whatsappWrapper: {
    display: "flex",
    gap: 10,
    marginTop: 6,
  },
  countryCode: {
    flexBasis: 120,
  },
  whatsappInput: {
    flex: 1,
  },
  submitButton: {
    padding: 15,
    fontSize: 18,
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

export default ContactForm;
