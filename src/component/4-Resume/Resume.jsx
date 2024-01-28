import "./Resume.css";
import { useState } from "react";
import eduData from "../../Data/EducationData";
import { ResumeCard, Button } from "../index";

const Resume = () => {
  // useState för att hålla koll på det aktiva filtret (all, education, experience)
  const [activeFilter, setActiveFilter] = useState("all");

  // Skapa huvudkort för varje post i utbildningsdata
  const allCards = eduData.map((item) => (
    <ResumeCard
      key={item.id}
      img={item.img}
      category={item.category}
      title={item.title}
      univer={item.univer}
      desc={item.desc}
      year={item.year}
      moreLink={item.moreLink}
    />
  ));
  // Filtrera korten beroende på det aktiva filtret
  const filteredCards =
    activeFilter === "all"
      ? allCards
      : allCards.filter((card) => card.props.category === activeFilter);

  return (
    <main className="d-flex container">
      {/* Avsnitt för att välja filterkategori */}
      <section className="left-sec d-flex">
        <Button
          name="All"
          onClick={() => setActiveFilter("all")}
          className={activeFilter === "all" ? "active" : ""}
        />
        <Button
          name="education"
          onClick={() => setActiveFilter("education")}
          className={activeFilter === "education" ? "active" : ""}
        />
        <Button
          name="experience"
          onClick={() => setActiveFilter("experience")}
          className={activeFilter === "experience" ? "active" : ""}
        />
      </section>
      {/* Avsnitt för att visa filtrerade huvudkort */}
      <section className="right-sec d-flex">{filteredCards}</section>
    </main>
  );
};

export default Resume;
