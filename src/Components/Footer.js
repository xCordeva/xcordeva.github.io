import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { scrollSpy, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  scrollSpy.update();

  const getBackToTop = () => {
    scroll.scrollToTop({
      duration: 750,
      smooth: "easeInOutQuad",
    });
  };
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <FontAwesomeIcon
        className="arrow"
        icon={faCircleArrowUp}
        style={{ color: "#ffffff", cursor: "pointer" }}
        onClick={getBackToTop}
      />
      <div className="footer">
        <a href="https://github.com/xCordeva">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-abdelaall/">
          <FontAwesomeIcon
            className="svg-linkedin"
            icon={faLinkedinIn}
            style={{ color: "black" }}
          />
        </a>
        <a href="https://www.facebook.com/ahmed.abdelaallx">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="credit">
        <p>© {year} Ahmed AbdElAal. All rights reserved.</p>
      </div>
    </div>
  );
}
