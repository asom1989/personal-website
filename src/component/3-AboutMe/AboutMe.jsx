import "./AboutMe.css";
import { GitRepo, Skills } from "../index";
import Lottie from "lottie-react";
import devBoy from "../../animation/boy-dev.json";

const AboutMe = () => {
  return (
    <>
      <section className="section-wrapper container">
        <div className="d-flex about-wrapper">
          <article className=" about-left d-flex">
            <Lottie className="about-animation " animationData={devBoy} />
            <p>
              My name is Motasem Zuhier born in jordan in 1989. Moved to Sweden
              in 2011. I am currently a student studying as a Front-end
              Developer. During this period, I have learned new things such as
              HTML, CSS and JavaScript. I have ability to work independently or
              in a team. Throughout my studies, I have developed the ability to
              work with HTML, CSS (Tailwind, SASS) and JavaScript remverk
              (React).
            </p>
            <div className="skills d-flex ">
              <Skills name="HtML: " for="html" value="80" />
              <Skills name="CSS: " for="css" value="75" />
              <Skills name="Tailwind: " for="tailwind" value="60" />
              <Skills name="JS: " for="js" value="55" />
              <Skills name="React: " for="react" value="50" />
            </div>
          </article>
          <GitRepo />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
