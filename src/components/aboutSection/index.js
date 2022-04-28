import React from "react";
import "./index.css";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="section about-section">
        <div className="about-title">
          <h4 className="about-title_heading">
            Welcome to <span>Marvin Service</span>
          </h4>
          <img src="./images/1.png" alt="" className="about-title_img" />
        </div>
        <div className="about-desc">
          <img src="./images/about.jpg" alt="" className="about-desc_img" />
          <div className="about-details">
            <h4 className="about-details_heading">
              Welcome To MARVIN LANDSCAPING AND MAINTENANCE AND TREE CUTTING
            </h4>
            <p className="about-details_para">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
