import "../Styles/About.css";
import useAddClasses from "../Custom Hooks/useAddClasses";
import { motion } from "framer-motion";

export default function About() {
  useAddClasses("my-name");

  return (
    <div className="about-contianer">
      <div className="about">
        <div className="about-details">
          <h1>Hi, I am</h1>
          <h1 id="my-name" className="floaty">
            Ahmed AbdElAal
          </h1>
          <h2>A Frontend Developer</h2>
          <p>
            Welcome to my coding playground. Bugs? Never heard of them. No
            promises it won’t blow your mind (or your browser). <br /> I’m a
            self-taught software engineer, full-time coder, and professional
            Googler. I get my dopamine rush from turning bugs into features and
            challenges into opportunities. Always learning, always building.{" "}
            <br /> I bring clean code, creative solutions, and a passion for
            building things that just work — no browser crashes (hopefully).
          </p>
          <a
            href="https://drive.google.com/file/d/1xWMlER9WE-aJ-x6JQW5T_icJ2-4DzUq4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              animate={{
                rotate: [0, -5, 5, -5, 5, 0],
                scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            >
              Check My Resume
            </motion.button>
          </a>
        </div>

        <div className="about-pic">
          <img
            src={require(`../images/me.jpg`)}
            alt="me-sitting-on-the-nile"
            loading="lazy"
          />

          <div className="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="space-ship">
          <img src={require(`../images/space-ship.gif`)} alt="" />
        </div>
      </div>
    </div>
  );
}
