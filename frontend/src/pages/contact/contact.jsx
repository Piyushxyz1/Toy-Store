import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    alert("Thanks for reaching out! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-shape contact-shape-one"></div>
        <div className="contact-hero-shape contact-shape-two"></div>

        <div className="contact-hero-inner">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              Let's start a
              <br />
              <em>conversation.</em>
            </h1>

            <p>
              Have a question, need help choosing a toy,
              or simply want to say hello? We'd love to
              hear from you.
            </p>
          </div>

          <div className="contact-hero-side">
            <span>TOYSTORE</span>
            <div className="contact-hero-line"></div>
            <small>
              WE'RE HERE
              <br />
              TO HELP
            </small>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-info">

            <div className="contact-section-label">
              <span>01</span>
              <div></div>
              <p>CONTACT DETAILS</p>
            </div>

            <h2>
              We'd love to
              <br />
              <em>hear from you.</em>
            </h2>

            <p className="contact-description">
              Whether you're looking for the perfect gift,
              have a question about an order, or want to
              share your feedback, our team is always happy
              to help.
            </p>

            <div className="contact-details">

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  @
                </div>

                <div>
                  <span>EMAIL</span>
                  <a href="mailto:hello@toystore.com">
                    hello@toystore.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  ☎
                </div>

                <div>
                  <span>PHONE</span>
                  <a href="tel:+7678631700">
                    +91 76786 31700
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  ⌖
                </div>

                <div>
                  <span>LOCATION</span>
                  <p>
                    New Delhi, India
                  </p>
                </div>
              </div>

            </div>

            <div className="contact-hours">
              <span>AVAILABLE HOURS</span>

              <div className="hours-row">
                <p>Monday — Friday</p>
                <strong>10:00 AM — 7:00 PM</strong>
              </div>

              <div className="hours-row">
                <p>Saturday</p>
                <strong>10:00 AM — 5:00 PM</strong>
              </div>

              <div className="hours-row">
                <p>Sunday</p>
                <strong>Closed</strong>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-wrapper">

            <div className="form-heading">
              <span>02</span>

              <div>
                <p>SEND A MESSAGE</p>
                <h3>
                  Tell us what's
                  <br />
                  <em>on your mind.</em>
                </h3>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>SUBJECT</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>YOUR MESSAGE</label>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Message</span>
                <span className="submit-arrow">
                  ↗
                </span>
              </button>

              <p className="form-note">
                We usually respond within one business day.
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* FAQ / BOTTOM CTA */}
      <section className="contact-bottom">

        <div className="contact-bottom-inner">

          <div className="contact-bottom-number">
            03
          </div>

          <div className="contact-bottom-content">
            <span>NEED SOMETHING ELSE?</span>

            <h2>
              We've got
              <br />
              <em>you covered.</em>
            </h2>

            <p>
              From choosing the right toy to tracking your
              order, we're always here to make your ToyStore
              experience easier.
            </p>
          </div>

          <div className="contact-bottom-decoration">
            <span>✦</span>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;