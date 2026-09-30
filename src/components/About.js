import React, { useState } from "react";
import { CardActions, CardContent, Link as MuiLink } from "@mui/material";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { FaDownload } from "react-icons/fa";
import image from "../images/osky.jfif";
import PDF from "../arc/Oscar_Burgos_CV.pdf";
import style from "./About.module.css";

const About = ({ title, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortBio =
    "I'm a Full Stack Developer building backend services, web applications and mobile experiences. My work includes real-time multiplayer systems, rewards platforms and a mobile loan management app developed for a client.";
  const fullBio =
    "I work across Node.js, TypeScript, Express, NestJS and REST APIs, as well as React and Flutter. I've used PostgreSQL, MongoDB and Redis in application development, and Docker in my workflow. ChessFive and EarnFive are in active development and testing; I also built ClashCycle with Flutter, FastAPI and MongoDB for a client.";

  return (
    <section className={`${style.section} ${style.sectionWhite}`} id={id}>
      <div className={style.sectionContent}>
        <div className={style.headerRow}>
          <div className={style.sectionTitle}>{title}</div>
          <span className={style.sectionSubtitle}>Backend · Web · Mobile</span>
        </div>

        <div className={style.card}>
          <div className={style.left}>
            <div className={style.avatarWrapper}>
              <div className={style.avatarGlow} />
              <img src={image} alt="Oscar Burgos" className={style.avatar} />
            </div>

            <div className={style.heroText}>
              <h1 className={style.heroTitle}>Hi, I'm Oscar Burgos</h1>
              <p className={style.heroRole}>Full Stack Developer</p>
              <p className={style.heroFocus}>Building backend, web and mobile applications.</p>
            </div>

            <div className={style.socialRow}>
              <MuiLink
                href="https://www.linkedin.com/in/oscarburgos/"
                aria-label="Oscar Burgos on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className={style.iconSocial} />
              </MuiLink>
              <MuiLink
                href="https://wa.me/573024166635"
                aria-label="Contact Oscar Burgos on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp className={style.iconSocial} />
              </MuiLink>
              <MuiLink href="https://github.com/Oskarp88" aria-label="Oscar Burgos on GitHub" target="_blank" rel="noopener noreferrer">
                <GitHub className={style.iconSocial} />
              </MuiLink>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.bioSection}>
              <h2 className={style.bioTitle}>Who I am</h2>
              <p className={style.bioText}>{shortBio}</p>
              {isExpanded && <p className={style.bioText}>{fullBio}</p>}
              <button onClick={() => setIsExpanded((p) => !p)} className={style.toggleButton}>
                {isExpanded ? "Show less" : "Read more"}
              </button>
            </div>

            <div className={style.actionsRow}>
              <CardActions>
                <a href={PDF} download className={style.pdfButton}>
                  <FaDownload size={18} style={{ marginRight: 8 }} />
                  Download CV
                </a>
              </CardActions>
              <CardContent className={style.tagList}>
                <span className={style.tag}>Node.js · TypeScript · NestJS</span>
                <span className={style.tag}>React · Flutter</span>
                <span className={style.tag}>PostgreSQL · MongoDB · Redis</span>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
