import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Save message to local storage (or send to backend in real projects)
    localStorage.setItem('messageName', name);
    localStorage.setItem('messagePhone', phone);
    localStorage.setItem('messageEmail', email);
    localStorage.setItem('messageText', message);

    alert('Message sent successfully!');


    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
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
            I’m a computer science student passionate
             about coding, web development, and creating interactive 
             designs. Reach out if you want to collaborate, ask questions, or just say hello!
          </p>

          <div className="contact-info">
            <p> wanyetsecharity@gmail.com</p>
            <p>  256 746 230 684 </p>
            <p></p>
          </div>

         
        

         {/* Right Section (Form) */}
         <div className="contact-right">
            <form className="send-message-form" onSubmit={handleSendMessage}>
               <input
                  type="text"
                   placeholder="Your Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
               />

                
               <input
                  type="number"
                   placeholder="Phone Number"
                   value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                   required
               />

               <input
                     type="email"
                     placeholder="Email (optional)"
                     value={email}
                      onChange={(e) => setEmail(e.target.value)}
                 />

               <textarea
                 placeholder="Your Message"
                  value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 required
                  />

                <button type="submit">Send a  Message</button>
            </form>
          </div>
        </div>
      </div>  
    </div>
  </div>
  );
};

export default Contact;
