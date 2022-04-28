import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="page">
      <h4 className="page_heading">About Us</h4>
      <div className="page-center">
        <img src="./images/1.png" alt="" className="page-logo" />
        <div className="aboutdesc">
          <div className="page-desc_cart1">
            <h4>
              Welcome to Marvin Landscaping and maintenance and tree cutting
            </h4>
            <p>
              Marvin Landscaping has been providing professional landscaping
              concepts, designs and lawn care services to The Bronx area,
              residential and corporate communities. Marvin Landscaping prides
              itself on employing a team of uniformed workers who have a minimum
              of 3 years experience and training in lawn maintenance to secure
              the highest quality of lawn care. Our teams are directed by a team
              leader to ensure your property is receiving all the attention and
              management services you expect. Marvin Landscaping offers a wide
              range of services from curb-appeal concept and landscape design to
              the required nurturing and maintenance of your lawn and garden
              fertilization, as well as the palm pruning and removal for your
              home or corporate garden to constantly flourish.
            </p>
          </div>
          <div className="page-desc_cart2">
            <img src="./images/service-contractor.jpg" alt="" />
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

export default About;
