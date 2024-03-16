"use client";
import React, { useState } from 'react';
import './NewsletterForm.css';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }


    setTimeout(() => {
      setEmail('');
      setErrorMessage('');
      setSuccessMessage('Thank you for subscribing!');
    }, 1000); 
  };

  return (
    <div className="newsletter-container">
      <h1>SUBSCRIBE TO OUR NEWSLETTER !</h1>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER YOUR EMAIL ADDRESS..."
          required
        />
        <button type="submit" className="subscribe-button">SUBSCRIBE</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default NewsletterForm;
