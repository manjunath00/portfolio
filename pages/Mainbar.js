import style from "../styles/Portfolio.module.css";

import {
  Git,
  Django,
  Python,
  HTML,
  CSS,
  React,
  JS,
  GitCard,
  LinkCard,
} from "./Icons";

export default function Mainbar() {

  const Skills = {
    git: <Git />,
    html: <HTML />,
    css: <CSS />,
    javascript: <JS />,
    react: <React />,
  };

  const Projects = [
    {
      name: "Pokedox",
      deLink: "https://github.com/manjunath00",
      ghLink: "github.com",
      description: "Full stack app with ability to search & create pokemons",
      stack: "MERN Stack",
    },
  ];

  return (
    <div className={style.mainbar}>
      <div className="project-section">
        <div className={style.heading}>Projects</div>
        <div className={style.projectsCards}>
          {Projects.map((item) => (
            <div className={style.card}>
              <div className={style.cardHeading}>
                <div>Pokedox</div>
                <a href={item.deLink} target="_blank">
                  {<LinkCard />}
                </a>
                <a href={item.ghLink} target="_blank">
                  {<GitCard />}
                </a>
              </div>

              <div className={style.cardDescription}>
                {item.description}
              </div>

              <div className={style.cardStack}>
                <strong>Tech Stack: </strong>
                {item.stack}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-section">
        <div className={style.heading}>Skills</div>
        <div className={style.skills}>
          {Object.keys(Skills).map((item) => (
            <div className={style.skill}>{Skills[item]}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
