import React from "react";
import Image from "next/image";
import logo from "../../public/img/kesho_logo.png";
import footerStyles from "./Footer.module.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <Image src={logo} alt="kesho congo logo" />
        <h3 className={footerStyles.title}>KESHO CONGO</h3>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>GET IN TOUCH</h3>
        <address className={footerStyles.items}>
          <Icon icon="bx:map" color="#fff" className={footerStyles.icon} />
          <span>58, Avenue Patrice Emery Lumumba</span>
        </address>
        <div className={footerStyles.items}>
          <Icon icon="bx:envelope" color="#fff" className={footerStyles.icon} />
          <span style={{ marginLeft: "2px" }}>info@keshocongo.org</span>
        </div>
        <div className={footerStyles.items}>
          <Icon
            icon="bx:mobile-vibration"
            color="#fff"
            className={footerStyles.icon}
          />
          <span>+243 822 561 854</span>
        </div>
        <div className={footerStyles.items}>
          <Icon
            icon="bxl:facebook-square"
            color="#fff"
            className={footerStyles.icon}
          />
          <Icon
            icon="bxl:instagram-alt"
            color="#fff"
            className={footerStyles.icon}
          />
          <Icon
            icon="bxl:linkedin-square"
            color="#fff"
            className={footerStyles.icon}
          />
        </div>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>QUICK LINKS</h3>
        <div className={footerStyles.items}>
          <Icon
            icon="bx:home-smile"
            color="#fff"
            className={footerStyles.icon}
          />
          <span style={{ marginLeft: "2px" }}>Home - About Us</span>
        </div>
        <div className={footerStyles.items}>
          <Icon
            icon="bx:donate-heart"
            color="#fff"
            className={footerStyles.icon}
          />
          <span style={{ marginLeft: "2px" }}>
            Donate - Build A Better World
          </span>
        </div>
        <div className={footerStyles.items}>
          <Icon icon="bx:news" color="#fff" className={footerStyles.icon} />
          <span style={{ marginLeft: "2px" }}>Blog - Kesho Congo News</span>
        </div>
        <div className={footerStyles.items}>
          <Icon icon="bx:image" color="#fff" className={footerStyles.icon} />
          <span style={{ marginLeft: "2px" }}>
            Gallery - Witness Our Progress
          </span>
        </div>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>ENQUIRY FORM</h3>
      </div>
    </footer>
  );
};

export default Footer;
