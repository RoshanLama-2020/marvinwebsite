import React, { useEffect, useState } from "react";
import data from "./data";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./index.css";

const Slider = () => {
  const [banners, setBanner] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = banners.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, banners]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="/" className="slider-container">
      <div className="section-center">
        {banners.map((banner, bannerIndex) => {
          const { id, image, title } = banner;

          let position = "nextSlide";
          if (bannerIndex === index) {
            position = "activeSlide";
          }
          if (
            bannerIndex === index - 1 ||
            (index === 0 && bannerIndex === banners.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <div className="slider-img">
                <img src={image} alt="" className="banner-img" />
              </div>
              <h3 className="title">
                {title}
              </h3>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <GrPrevious />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default Slider;
