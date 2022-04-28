import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./index.css";

const Images = () => {
  const myStyle1= {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(./images/1.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
  };
  const myStyle2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(./images/2.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
  };
  const myStyle3 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(./images/3.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
  };

  return (
    <section className="section img-container">
      <div className="img-section" style={myStyle1}>
        <div className="img-section_icon">
          <svg
            class="svg-inline--fa fa-pagelines fa-w-12"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="pagelines"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z"
            ></path>
          </svg>
        </div>
        <div className="img-section_details">
          <h4 className="img-section_heading">Free Consultation</h4>
          <p className="img-section_para">
            Consult, talk and discuss with us for better and designer
            landscaping services.
          </p>
        </div>
      </div>

      {/* section divide */}
      <div className="img-section" style={myStyle2}>
        <div className="img-section_icon">
          <svg
            class="svg-inline--fa fa-certificate fa-w-16"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="certificate"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"
            ></path>
          </svg>
        </div>
        <div className="img-section_details">
          <h4 className="img-section_heading">Certified Products</h4>
          <p className="img-section_para">
            We use certified products for our work and better looking design.
          </p>
        </div>
      </div>

      {/* sectiondivide */}
      <div className="img-section" style={myStyle3}>
        <div className="img-section_icon">
          <svg
            class="svg-inline--fa fa-yelp fa-w-12"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="yelp"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
            ></path>
          </svg>
        </div>
        <div className="img-section_details">
          <h4 className="img-section_heading">Free Helpline</h4>
          <p className="img-section_para">
            Free Helpline Need our help even after our job done? We are here for
            you. Talk to us get help and keep your landscaping better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Images;
