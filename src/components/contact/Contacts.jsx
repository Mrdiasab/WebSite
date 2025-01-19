import React, { useRef, useState } from "react";
import "./Contacts.css";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contacts = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      type: "Email",
      value: "mrdiasab@gmail.com",
      icon: "📧",
      link: "mailto:mrdiasab@mrdiasab.com"
    },
    {
      type: "GitHub",
      value: "github.com/mrdiasab",
      icon: "💻",
      link: "https://github.com/mrdiasab"
    },
    {
      type: "Telegram",
      value: "@mrdiasab",
      icon: "📱",
      link: "https://t.me/mrdiasab"
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_umgihmh', // Замените на ваш Service ID из EmailJS
      'template_rso9ft4', // Замените на ваш Template ID
      form.current,
      'rXpIrzfbhokM-u2TR' // Замените на ваш Public Key
    )
    .then((result) => {
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    });
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="contacts-wrapper"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="contacts-section">
        <div className="contacts-content">
          <h1 className="contacts-title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="contacts-description">
            Feel free to reach out to me through any of these platforms
          </p>
          
          <motion.div 
            className="contacts-grid"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                href={contact.link}
                className="contact-card"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="contact-icon">{contact.icon}</div>
                <h3 className="contact-type">{contact.type}</h3>
                <p className="contact-value">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="form-title">
              Send me a <span className="highlight">Message</span>
            </h2>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-input form-textarea"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="form-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="submit-message success"
                >
                  Message sent successfully!
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="submit-message error"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;