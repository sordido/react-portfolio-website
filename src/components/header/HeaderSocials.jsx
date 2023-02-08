import React from "react";
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default headerSocials;
