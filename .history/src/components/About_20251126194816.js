import React, { useState } from "react";
import { CardActions, CardContent, Link as MuiLink } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { FaDownload } from "react-icons/fa";
import image from "../images/osky.jfif";
import PDF from "../arc/Cv full Stack developer - Oscar Burgos.pdf";
import style from "./About.module.css";
import { useWindowWidth } from "../utils/useWidth";

const About = ({ title, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const width = useWindowWidth();

  const fullBio = `
I'm a full-stack developer specialized in building robust, scalable and user-centric web and mobile applications. 
I work with JavaScript, React, Redux, Node.js, Express, PostgreSQL and MongoDB, and I also build cross-platform apps using Flutter and Dart.

Recently I’ve been focused on real-time applications: I developed ChessFive, an online chess platform with live matches, rankings and monetization features, and a financial loan management system using Flutter (frontend) and FastAPI + MongoDB (backend).

I care deeply about clean architecture, performance, maintainability and good developer experience. I enjoy taking ownership of projects end-to-end, from the idea to production and iteration.
  `;

  const shortBio = `${fullBio.slice(0, 350)}...`;

  return (
    <section className={`${style.section} ${style.sectionWhite}`} id={id}>
      <div className={style.sectionContent}>
        <div className={style.headerRow}>
          <h2 className={style.sectionTitle}>{title}</h2>
          <span className={style.sectionSubtitle}>Full Stack Developer · Flutter & FastAPI</span>
        </div>

        <div className={style.card}>
          <div className={style.left}>
            <div className={style.avatarWrapper}>
              <div className={style.avatarGlow} />
              <img src={image} alt="Oscar Burgos" className={style.avatar} />
            </div>

            <div className={style.typeWriter}>
              <TypeWriterEffect
                component="h1"
                text="Hi, I'm Oscar Burgos"
                textStyle={{
                  fontSize: `${Math.min(width * 0.05, 32)}px`,
                  fontWeight: 700,
                  color: "#e5e7eb",
                }}
                startDelay={200}
                cursorColor="#22c55e"
                typeSpeed={60}
              />
              <TypeWriterEffect
                text="Full Stack Developer · Flutter & FastAPI Specialist"
                textStyle={{
                  color: "#9ca3af",
                  fontSize: `${Math.min(width * 0.03, 20)}px`,
                  fontWeight: 400,
                }}
                component="h2"
                startDelay={2100}
                cursorColor="#22c55e"
                typeSpeed={50}
              />
            </div>

            <div className={style.socialRow}>
              <MuiLink
                href="https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className={style.iconSocial} />
              </MuiLink>
              <MuiLink
                href="https://wa.me/573042684860?text=Hola%2C%20estoy%20interesado%20en%20tu%20perfil%20como%20Full%20Stack%20Web%20Developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp className={style.iconSocial} />
              </MuiLink>
              <MuiLink href="https://github.com/Oskarp88" target="_blank" rel="noopener noreferrer">
                <GitHub className={style.iconSocial} />
              </MuiLink>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.bioSection}>
              <h3 className={style.bioTitle}>Who I am</h3>
              <p className={style.bioText}>{isExpanded ? fullBio : shortBio}</p>
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
                <span className={style.tag}>React · Node.js · FastAPI</span>
                <span className={style.tag}>Flutter · Firebase</span>
                <span className={style.tag}>Clean architecture</span>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
