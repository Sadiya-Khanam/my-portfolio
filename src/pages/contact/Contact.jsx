/*
import { RiMailLine, RiBook2Line, RiSendPlaneLine } from "react-icons/ri";
import './contact.css';
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');
      return;
    }
    setMessageColor('color-green');
    setFeedbackMessage('Message sent successfully (simulated)');
  };

  return (
    <section className='contact section'>
      <h2 className='section-title'>
        Contact <span>Me</span>
      </h2>

      <div className='contact-container container grid'>
        <div className='contact-content grid'>

          <div className='contact-card'>
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">khanamsadiya1234@gmail.com</p>
            </div>
          </div>

          <div className='contact-card'>
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone No</h3>
              <p className="contact-data">+919305949094</p>
            </div>
          </div>
        </div>

        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-label">
                Your full Name <b>*</b>
              </label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-label">
                Your Email Address <b>*</b>
              </label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">
              Your Subject <b>*</b>
            </label>
            <input
              type='text'
              name='subject'
              onChange={handleChange}
              value={formData.subject}
              className="contact-form-input"
            />
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className='contact-form-input contact-form-area'
            />
          </div>

          <div className="contact-button">
            <button type="submit" className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
*/

import { useState } from 'react';
import { RiMailLine, RiSendPlaneLine } from 'react-icons/ri';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFeedbackMessage('Please fill in all required fields.');
      setMessageColor('color-red');
      return;
    }

    emailjs
      .send('service_0cc9w0l', 'template_w26ieau', formData, 'HgEh_NxxshPwNgnG8')
      .then(
        () => {
          setMessageColor('color-green');
          setFeedbackMessage('Message sent successfully!');
          setTimeout(() => setFeedbackMessage(''), 5000);
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('Error sending email: ', error);
          setMessageColor('color-red');
          setFeedbackMessage('Oops! Something went wrong. Please try again later.');
          setTimeout(() => setFeedbackMessage(''), 5000);
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        {/* Contact Info Card */}
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">khanamsadiya1234@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-label">Your Full Name *</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-label">Your Email Address *</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">Your Subject *</label>
            <input
              type="text"
              name="subject"
              className="contact-form-input"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">Your Message *</label>
            <textarea
              name="message"
              className="contact-form-input contact-form-area"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="contact-button">
            <button type="submit" className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>
        </form>

        {/* Feedback Message */}
        {feedbackMessage && (
          <p className={`contact-message ${messageColor}`}>{feedbackMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
