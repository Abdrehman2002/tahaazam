import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div  className="container mx-auto max-w-7xl">
     <div id="home"><Navbar /></div>
      <Hero />
      <div id="about"><About /></div>
      <div id="project"><Projects /></div>
      <div id="work"> <Experiences /></div>
      <div id="testimonial"> <Testimonial /></div>
      <div id="contact"> <Contact /></div>
      <Footer/> 
    </div>
  );
};

export default App;
