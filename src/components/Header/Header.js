import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello This is</h5>
        <h1>Rubel Mia</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          {" "}
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
