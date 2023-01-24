import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.example.com">Example.com</a>
      <div>
        <a href="https://www.facebook.com/example">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/example">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/example">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
