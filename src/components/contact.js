import React from "react"

const Contact = () => (
  <>
    <div className="contact-title">
      <h1 className="contact-title-box">Sponsors and Affiliates</h1>
    </div>
    <div className="sponsors">
      <img
        className="sponsor-logo"
        src={require("../assets/images/sponsors.jpg")}
      />
    </div>
    <div className="contact-section">
      <div className="location">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.1421972123144!2d6.805311315745134!3d50.828529979529335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf3d9c390ec3c3%3A0xb3d598837b62d663!2sMittelstra%C3%9Fe+11%2C+50374+Erftstadt%2C+Germany!5e0!3m2!1sen!2sca!4v1565160835642!5m2!1sen!2sca"
            className="iframe-map"
          />
        </div>
        <div className="contact-details">
          <ul className="details-list">
            <li>Mittelstraße 11, 50374 Erftstadt, Germany</li>
            <li>+39 1234 5678</li>
            <li>official.crossfire.film@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          method="post"
          action="#"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className="name-input" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="email-input"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="message-input"
            />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </>
)

export default Contact
