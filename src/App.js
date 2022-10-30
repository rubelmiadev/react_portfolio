import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
