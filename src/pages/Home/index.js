import React from "react";
import Slider from "../../components/Slider";
import Images from "../../components/Images";
import AboutSection from "../../components/aboutSection";
import ServiceSection from "../../components/servicesSection";
import WhyUsSection from "../../components/whyUsSection";
import ContactSection from "../../components/ContactSection";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Slider />
      <Images />
      <AboutSection/>
      <ServiceSection/>
      <WhyUsSection/>
      <ContactSection/>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
