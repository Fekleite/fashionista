import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Desenvolvido com muito <span />
        ❤️ por Fernanda Leite
      </p>
      <div className="footer__links">
        <a
          href="http://github.com/Fekleite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#fff" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/fcleite19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#fff" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
