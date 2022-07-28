import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instragram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Images from "../../assets/images.png";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="links">
        <div className="social">
          <a className="social" href="http://www.instagram.com/zalaz.ar">
            <img src={Instragram} alt="" />
          </a>
          <a  className="social" href="https://www.linkedin.com/in/alberto-rub%C3%A9n-echavarria-zalazar-353836199/">
            <img src={Linkedin} alt="" />
          </a>

          <a className="social" href="http://www.github.com/alberto012">
            <img src={Github} alt="" />
          </a>
        </div>
        <span className="email">rechavarria2@gmail.com</span>
        <div className="logo">
          
          <img src={Images} alt=""></img>
        
          
        </div>
      </div>
    </div>
  );
};
