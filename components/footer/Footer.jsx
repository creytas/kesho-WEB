import React from "react";
import Image from "next/image";
import logo from "../../public/img/kesho_logo.png";
import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <Image src={logo} alt="kesho congo logo" />
        <h3 className={footerStyles.title}>KESHO CONGO</h3>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>GET IN TOUCH</h3>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>QUICK LINKS</h3>
      </div>
      <div className="footer-section">
        <h3 className={footerStyles.title}>ENQUIRY FORM</h3>
      </div>
    </footer>
  );
};

export default Footer;
