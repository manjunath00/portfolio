import style from "../styles/Portfolio.module.css";

import { GithubLink, LinkedInLink } from "./Icons";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.imageContainer}>
        <div className={style.image}>
          <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div className={style.name}>Manjunath</div>

        <div className={style.subheading}>Fullstack developer</div>

        <div className={style.portfolioWebsite}>
          <div className={style.link}>
            <a href="https://github.com/manjunath00" target="_blank">
              {<GithubLink />}
            </a>
          </div>
          <div className={style.link}>
            <a href="https://github.com/manjunath00" target="_blank">
              {<LinkedInLink />}
            </a>
          </div>
        </div>
      </div>

      <div className={style.contactSection}>
        <div className={style.contact}>Contact Me</div>

        <div className={style.contactPhone}>
          <strong>Phone:</strong> +91 1234567890
        </div>

        <div className={style.contactPhone}>
          <strong>Email:</strong> manjunath@xyz.com
        </div>
      </div>
    </div>
  );
}
