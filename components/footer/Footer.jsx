import React from "react";
import Image from "next/image";
import logo from "../../public/img/kesho_logo.png";
import footerStyles from "./Footer.module.css";
import { Icon } from "@iconify/react";
import CustomedTextField from "./CustomedTextField";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section" style={{ padding: "1.5%" }}>
        <Image src={logo} alt="kesho congo logo" />
        <h3 className={footerStyles.title} style={{ textAlign: "center" }}>
          KESHO CONGO
        </h3>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>GET IN TOUCH</h3>
        <address className={footerStyles.items}>
          <Icon icon="bx:map" color="#fff" className={footerStyles.icon} />
          <a>58, Avenue Patrice Emery Lumumba</a>
        </address>
        <adress className={footerStyles.items}>
          <Icon icon="bx:envelope" color="#fff" className={footerStyles.icon} />
          <a href="mailto:info@keshocongo.org" style={{ marginLeft: "2px" }}>
            info@keshocongo.org
          </a>
        </adress>
        <adress className={footerStyles.items}>
          <Icon
            icon="bx:mobile-vibration"
            color="#fff"
            className={footerStyles.icon}
          />
          <a>+243 822 561 854</a>
        </adress>
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
          <a style={{ marginLeft: "2px" }}>Home - About Us</a>
        </div>
        <div className={footerStyles.items}>
          <Icon
            icon="bx:donate-heart"
            color="#fff"
            className={footerStyles.icon}
          />
          <a style={{ marginLeft: "2px" }}>Donate - Build A Better World</a>
        </div>
        <div className={footerStyles.items}>
          <Icon icon="bx:news" color="#fff" className={footerStyles.icon} />
          <a style={{ marginLeft: "2px" }}>Blog - Kesho Congo News</a>
        </div>
        <div className={footerStyles.items}>
          <Icon icon="bx:image" color="#fff" className={footerStyles.icon} />
          <a style={{ marginLeft: "2px" }}>Gallery - Witness Our Progress</a>
        </div>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>ENQUIRY FORM</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <CustomedTextField
            variant="outlined"
            label="Your mail"
            margin="dense"
          />
          <CustomedTextField
            variant="outlined"
            label="Subject"
            margin="dense"
          />
          <CustomedTextField
            variant="outlined"
            label="Your message"
            multiline
            rows={5}
            margin="dense"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
