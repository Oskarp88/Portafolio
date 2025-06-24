import { Button, CardActions, CardContent, Link } from '@mui/material';
import React, { useState } from 'react';
import image from "../images/osky.jfif";
import TypeWriterEffect from "react-typewriter-effect";
import PDF from "../arc/Cv full Stack developer - Oscar Burgos.pdf";
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { FaDownload } from 'react-icons/fa';
import style from './About.module.css';
import { useWindowWidth } from '../utils/useWidth';

const About = ({ title, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const width = useWindowWidth();

  const fullBio = `
    I'm a full-stack developer with expertise in web and mobile development, experienced in technologies like JavaScript, React, Redux, Node.js, Express, PostgreSQL, and MongoDB. I also specialize in Python frameworks such as FastAPI and Flask, and have strong proficiency in building cross-platform apps with Flutter and Dart.

    My notable work includes developing a full-featured online chess application entirely in Flutter, and a financial loan management system using Flutter (frontend) and FastAPI with MongoDB (backend). I enjoy working on challenging projects that combine creativity with technical problem solving. Passionate about clean architecture, responsive design, and delivering efficient, scalable software.
  `;

  return (
    <section className={`${style.section} ${style.sectionWhite}`} id={id}>
      <div className={style.sectioncontent}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.card}>
          <div className={style.header}>
            <div className={style.picture}>
              <img src={image} alt="Oscar Burgos" className={style.cardMedia} />
            </div>
            <div className={style.typeWriter}>
              <TypeWriterEffect
                component="h1"
                text="Hi, I'm Oscar Burgos"
                textStyle={{
                  fontSize: `${width * 0.05}px`,
                  fontWeight: 600,
                  color: "#FF6F61",
                }}
                startDelay={100}
                cursorColor="black"
                typeSpeed={80}
              />
              <TypeWriterEffect
                text="Full Stack Developer | Flutter & FastAPI Specialist"
                textStyle={{
                  color: '#2C3E50',
                  fontSize: `${width * 0.03}px`,
                  fontWeight: 400,
                }}
                component="h2"
                startDelay={2500}
                cursorColor="black"
                typeSpeed={80}
              />
            </div>
          </div>

          <div className={style.cardContent}>
            <div className={style.bioSection}>
              <h2>About Me</h2>
              <p className={style.bioText}>
                {isExpanded ? fullBio : `${fullBio.slice(0, 300)}...`}
              </p>
              <button onClick={toggleExpand} className={style.button}>
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>

            <div className={style.actionsRow}>
              <CardActions>
                <a href={PDF} download className={style.pdfButton}>
                  <FaDownload size='20' style={{ marginRight: 8 }} />
                  Download CV
                </a>
              </CardActions>
              <CardContent className={style.iconContainer}>
                <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                  <LinkedIn style={{ color: '#0077B5' }} className={style.iconSocial} />
                </Link>
                <Link href='https://wa.me/573042684860?text=Hola%2C%20estoy%20interesado%20en%20tu%20perfil%20como%20Full%20Stack%20Web%20Developer' target='_blank' rel='noopener noreferrer'>
                  <WhatsApp style={{ color: '#25D366' }} className={style.iconSocial} />
                </Link>
                <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                  <GitHub style={{ color: '#0D1117' }} className={style.iconSocial} />
                </Link>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;