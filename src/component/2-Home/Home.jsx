import "./Home.css";
import { useState } from "react";
import img1 from "../../assets/asom.png";
import { MdVerified } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Lottie from "lottie-react";
import devAnimation from "../../animation/devAnimation.json";
import { LiHeader, AnimatedText, Button } from "../index";
import cv from "../../assets/CV.pdf";

const Home = () => {
  // useState för att hantera text på knappen
  const [buttonText, setButtonText] = useState("Download CV");
  // Funktion för att hantera knappklick
  const handleButtonClick = () => {
    setButtonText("Thank you");
  };
  return (
    <section className="hero  container ">
      <article className="left-section d-flex ">
        <div className="parent-avatar d-flex ">
          <img src={img1} className="avatar" alt="Motasem" />
          <span>
            <MdVerified />
          </span>
        </div>
        <AnimatedText text="Front-end Developer" />

        {/* <h1 className="title-hero">
          Software designer, founder, and amateur astronaut.
        </h1> */}

        <p className="sub-title-hero">
          I'm Motasem Zuhier, welcome to my personal page! I'm here to share my
          journey in the world of programming and software development. Enjoy
          exploring my skills and projects, and get to know me better through
          diverse and interactive content.
        </p>

        <div className="icons  d-flex">
          <ul className="d-flex">
            <LiHeader
              link="https://www.instagram.com/asom19893/"
              title={<FaInstagram />}
              target="_blank"
            />
            <LiHeader
              link="https://github.com/asom1989"
              title={<FaGithub />}
              target="_blank"
            />
            <LiHeader
              link="https://www.linkedin.com/in/motasem-abushareefih-b35197114/"
              title={<FaLinkedin />}
              target="_blank"
            />
          </ul>
          {/* Knapp för att ladda ner CV */}
          <a href={cv} download style={{ padding: "1rem" }}>
            <Button onClick={handleButtonClick} name={buttonText} />
          </a>
        </div>
      </article>

      {/* Högre sektion med animationsvideo */}
      <article className="right-section animation">
        <Lottie animationData={devAnimation} />
      </article>
    </section>
  );
};

export default Home;
