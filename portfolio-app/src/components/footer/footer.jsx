import { BsInstagram, BsMouse } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble, TiSocialFacebook,TiSocialGithub, TiSocialLinkedin, TiSocialYoutube,} from "react-icons/ti";

import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse />- scroll up-
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/digi.drago/" target="_blank" rel="noreferrer">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/aah.thuu" target="_blank" rel="noreferrer">
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          <TiSocialDribbble className="social" />
        </a>
        <a href="https://www.youtube.com/c/TTB_Official" target="_blank" rel="noreferrer">
          <TiSocialYoutube className="social" />
        </a>
        <a href="https://github.com/rx290" target="_blank" rel="noreferrer">
          <TiSocialGithub className="social" />
        </a>
        <a href="https://www.linkedin.com/in/muhammadasadwaseem/" target="_blank" rel="noreferrer">
          <TiSocialLinkedin className="social" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
