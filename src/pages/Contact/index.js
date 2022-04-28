import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <div className="page">
      <h4 className="page_heading">Contact Us</h4>
      <div className="page-center">
        <img src="./images/1.png" alt="" className="page-logo" />
        <div className="page-desc">
          <div className="contact-details">
            <div className="contact-cart">
              <svg
                class="svg-inline--fa fa-map-marker-alt fa-w-12"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="map-marker-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              <p>Worcester, Massachusetts</p>
            </div>
            <div className="contact-cart">
              <svg
                class="svg-inline--fa fa-mobile-alt fa-w-10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="mobile-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                ></path>
              </svg>
              <p>(508) 667 5507</p>
            </div>
            <div className="contact-cart">
              <svg
                class="svg-inline--fa fa-envelope-open fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope-open"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"
                ></path>
              </svg>
              <p>marvinaquino1992@gmail.com</p>
            </div>
          </div>
          <div className="contact-forms">
            <form ref={form} onSubmit={sendEmail}>
              <div>
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
              </div>

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
      </div>
      <div className="page-footer">
        <div className="page-footer-desc">
          <h4 className="page-footer_heading">Contact With Us</h4>
          <p className="page-footer_para">
            Do you have any comments or questions about the service then contact
            us.
          </p>
        </div>
        <a href="tel:(508) 667 5507" className="page-footer_btn">
          Tap To Call
        </a>
      </div>
    </div>
  );
};

export default Contact;
