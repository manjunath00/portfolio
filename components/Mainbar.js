import style from "../styles/Portfolio.module.css";
import portfolio from "../components/portfolio.json";

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
} from "../components/Icons";

export default function Mainbar() {
  const Skills = {
    git: <Git />,
    html: <HTML />,
    css: <CSS />,
    javascript: <JS />,
    react: <React />,
  };

  const Projects = portfolio.projects;

  return (
    <div className={style.mainbar}>
      <div className="project-section">
        <div className={style.heading}>Projects</div>
        <div className={style.projectCards}>
          {Projects.map((item) => (
            <div className={style.card}>
              <div className={style.cardHeading}>
                <div>{item.name}</div>
              </div>

              <div className={style.cardDescription}>{item.description}</div>

              <div className={style.cardStack}>Tech Stack: {item.stack}</div>

              <div className={style.projectLink}>
                <div>
                  <a href={item.liveLink} target="_blank">
                    Live Link
                  </a>
                </div>
                <div>
                  <a href={item.repoLink} target="_blank">
                    Repo Link
                  </a>
                </div>
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
