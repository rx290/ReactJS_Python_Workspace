import "./home.css";
import img from '../props/pp.png';
import { BsMouse } from "react-icons/bs";
// import { ToggleOff } from "@material-ui/icons";
import Buttons from "../button/button";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img" id="img-btn" onClick={circle_event}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src= {img} alt="" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About Me</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur ac sollicitudin elit, at suscipit ligula.
          Morbi lobortis turpis nec faucibus commodo. Sed tincidunt purus eu turpis porta, ultricies sodales velit eleifend.
          Mauris augue quam, convallis in sem sit amet, sagittis fringilla ipsum. Fusce viverra nunc in quam sodales euismod eget nec erat.
          Proin a ex sollicitudin, tincidunt ipsum at, bibendum libero. Aliquam molestie, massa non vehicula sagittis, neque nulla varius lacus, quis euismod dui arcu a mi.
          Aliquam sed nunc nulla. Phasellus cursus vestibulum risus, sit amet vehicula nisi. Praesent vulputate aliquet nunc sit amet malesuada. Nullam dapibus elementum enim. 
          Morbi nec varius erat.</p>
      </h2>
      <Buttons />
    </div>
  );
};

// const circle_event = document.querySelector('.main-img');
// circle_event.addEventListener('click', () => {
//   circle_event.classList.toggle('active');
// });

function circle_event() {
  var element = document.getElementById("img-btn");
  element.classList.toggle("active");
}

export default Home;
