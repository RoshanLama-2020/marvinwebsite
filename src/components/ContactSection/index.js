import React, { useRef } from "react";
import "./index.css";
import Map from "../Maps/index";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kxmj981",
      "template_7g1783o",
      form.current,
      "k0iicYbCfP2vFFFml"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact">
      <div className="section contact-section">
        <div className="contact-title">
          <h4 className="contact-title_heading">
            Welcome to <span>Marvin Service</span>
          </h4>
          <img src="./images/1.png" alt="" className="contact-title_img" />
        </div>
        <div className="contact-desc">
          <Map />
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name Here"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Here"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject Here"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Subject Here"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
