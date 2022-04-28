import React from "react";
import "./index.css";
import data from "./cartItems";

const ServiceSection = () => {
  const carts = data;

  return (
    <section id="services" className="section">
      <div className="service-title">
        <h4 className="service-title_heading">
          Welcome to <span>Marvin Service</span>
        </h4>
        <img src="./images/1.png" alt="" className="service-title_img" />
      </div>
      <div className="service-desc">
        {carts.map((cart, index) => {
          const { id, title,img, desc } = cart;

          return (
            <div key={id} className="service-cart">
              <img
                src={img}
                alt={title}
                className="service-cart_img"
              />
              <div className="service-cart_desc">
                <h4 className="service-cart_heading">{title}</h4>
                <p className="service-cart_para">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
