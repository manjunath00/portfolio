import style from "../styles/Portfolio.module.css";

import portfolio from "../components/portfolio.json";
import { GithubLink, LinkedInLink } from "../components/Icons";

export default function Sidebar() {
  const { profilePhoto, name, github, linkedin, contactNo, email, subheading } =
    portfolio;

  return (
    <div className={style.sidebar}>
      <div className={style.imageContainer}>
        <div className={style.image}>
          <img src={profilePhoto} />
        </div>
        <div className={style.name}>{name}</div>

        <div className={style.subheading}>{subheading}</div>

        <div className={style.portfolioWebsite}>
          <div className={style.link}>
            <a href={github} target="_blank">
              {<GithubLink />}
            </a>
          </div>
          <div className={style.link}>
            <a href={linkedin} target="_blank">
              {<LinkedInLink />}
            </a>
          </div>
        </div>
      </div>

      <div className={style.contactSection}>
        <div className={style.contact}>Contact Me</div>

        <div className={style.contactPhone}>
          <strong>Phone:</strong> <a href={`tel: ${contactNo}`}>{contactNo}</a>
        </div>

        <div className={style.contactPhone}>
          <strong>Email:</strong> <a href={`mailto: ${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
}
