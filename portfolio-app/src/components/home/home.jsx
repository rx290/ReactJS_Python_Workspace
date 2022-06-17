import "./home.css";
// import img from '../props/img.jpg';
import { BsMouse } from "react-icons/bs";
import { ToggleOff } from "@material-ui/icons";
import Buttons from "./components/buttons/buttons";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="Logo">
        <div className="main-img">
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
          <span className="'circle"></span>
        </div>
        <img src="{img}" alt="" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About Me</span>

        <p>some text</p>
      </h2>
      <Buttons />
    </div>
  );
};

const toogle = document.querySelector(".main-img");
toogle.addEventListener("click", () => {
  ToggleOff.classList.toggle("active");
});

export default Home;
