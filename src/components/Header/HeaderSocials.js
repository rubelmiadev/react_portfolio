import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.facebook.com/mdrubel.mia.35912/">
        <BsFacebook />
      </a>
      <a href="https://github.com/iamrubel">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/iamrubel/">
        <BsLinkedin />
      </a>
      <a href="https://www.youtube.com/channel/UCrDoz_ULvyPxsN-ZGf3gHUQ">
        {" "}
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
