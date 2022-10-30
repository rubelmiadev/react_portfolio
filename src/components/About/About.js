import React from "react";
import "./About.css";
import Me from "../../assets/me.png";
import { FiAward } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { VscNewFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <HiOutlineUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className="about_card">
              <VscNewFolder className="about_icon" />
              <h5>Projects</h5>
              <small>82+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            delectus, voluptatem necessitatibus mollitia quo quod repudiandae.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
