import "./AboutMe.css";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import byggAnimation from "../../animation/bast.json";
import { Button } from "../index";

const GitRepo = () => {
  // useState för att lagra projektdatan
  const [data, setData] = useState([]);
  // useState för att hantera laddningsstatus
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = "https://api.github.com/users/asom1989/repos";

    // Hämta projektdatan från GitHub API
    fetch(URL)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Nätverkssvar var inte ok");
        }
        return resp.json();
      })
      .then((data) => {
        // Uppdatera projektdatan när den har hämtats
        setData(data);
        setLoading(false); // Sluta ladda när hämtningen är klar
      })
      .catch((error) => {
        console.error("Fel vid hämtning av data:", error);
        setLoading(false); // Sluta ladda om det uppstår ett fel
      });
  }, []); // Körs en gång vid komponentens montering

  // Visa laddningsmeddelande om data hämtas, annars visa meddelande om inga projekt hittades
  if (loading) {
    return <p>Laddar...</p>;
  } else if (data.length === 0) {
    return <p>Inga projekt hittades.</p>;
  } else {
    // Visa projekten och knappar för varje projekt
    return (
      <article className="d-flex  about-right">
        <Lottie className="about-animation" animationData={byggAnimation} />
        <div className="repo-wrapper">
          <h4>
            This is the projects that I have contributed to in their
            development.
            <span>
              Click on the project name to go to the GitHub repository
            </span>
          </h4>
          <div className="d-flex repo">
            {data.map((repo) => (
              <a key={repo.id} target="_blank" href={repo.html_url}>
                <Button name={repo.name} />
              </a>
            ))}
          </div>
        </div>
      </article>
    );
  }
};

export default GitRepo;
