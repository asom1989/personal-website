import "./Contact.css";
import React, { useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/handContact.json";
import Button from "../Buttons/Button";

const Contact = () => {
  // useState för att hantera formulärdata
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  // Hantera ändringar i input-fälten och uppdatera formulärdata
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Hantera formulärinskickning
  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du implementera logik för att skicka formulärdata till en server
    console.log("Form submitted:", formData);
  };

  return (
    <section className="container contact-form d-flex ">
      {/* Formulärsektion */}
      <form onSubmit={handleSubmit}>
        <h3>Drop Me a Message</h3>
        <div className="form-group">
          <label htmlFor="txtName" className="form-label">
            Your Name :
          </label>
          <input
            type="text"
            id="txtName"
            name="name"
            className="form-control"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="txtEmail" className="form-label">
            Your Email :
          </label>
          <input
            type="text"
            id="txtEmail"
            name="email"
            className="form-control"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="txtPhone" className="form-label">
            Your Phone Number :
          </label>
          <input
            type="text"
            id="txtPhone"
            name="phone"
            className="form-control"
            placeholder="Your Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="txtMsg" className="form-label">
            Your Message :
          </label>
          <textarea
            id="txtMsg"
            name="msg"
            className="form-control"
            placeholder="Your Message *"
            value={formData.msg}
            onChange={handleChange}
            required
          ></textarea>
          <Button name="Send Message" type="submit" target="_blank" />
        </div>
      </form>
      {/* Animation för kontaktsektion */}
      <article className="contact-image ">
        <Lottie animationData={contactAnimation} />
      </article>
    </section>
  );
};

export default Contact;
