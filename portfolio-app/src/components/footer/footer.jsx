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
        <a href="#">
          <BsInstagram className="social" />
        </a>
        <a href="#">
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          <TiSocialDribbble className="social" />
        </a>
        <a href="#">
          <TiSocialYoutube className="social" />
        </a>
        <a href="#">
          <TiSocialGithub className="social" />
        </a>
        <a href="#">
          <TiSocialLinkedin className="social" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
