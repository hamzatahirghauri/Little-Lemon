import React from "react";
import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutUs from "../components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
    </>
  );
};

export default HomePage;
