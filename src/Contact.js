import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1rn6g8f",   
        "template_3hbc3we",  // 👉 from EmailJS dashboard
        form.current,
        "ybv77KB42U8RDrrOg"

      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );

    // Reset fields
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="send-message-container">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Section */}
          <div className="contact-left">
            <h1 className="title">
              Say <span>Hi if interested</span>
            </h1>
            <p className="subtitle">Let’s work Together</p>
            <p className="description">
              I’m a computer science student passionate about coding, web
              development, and creating interactive designs. Reach out if you
              want to collaborate, ask questions, or just say hello!
            </p>

            <div className="contact-info">
              <p> wanyetsecharity@gmail.com</p>
              <p> 256 746 230 684 </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="contact-right">
            <form
              ref={form}
              className="send-message-form"
              onSubmit={handleSendMessage}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button type="submit">Send a Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

