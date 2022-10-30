import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        DreamZone
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com">
          <BsFacebook />
        </a>
        <a href="https://www.instragram.com">
          <BsInstagram />
        </a>
        <a href="https://www.github.com">
          <BsGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DreamZone It.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
