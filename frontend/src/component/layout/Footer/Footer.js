import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>LOCALSTORE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; DKaushik</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/kaushik_d1/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/Kaushik68863304"  target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/kaushik-das-075433239"  target="_blank" rel="noopener noreferrer">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
