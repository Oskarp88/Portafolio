import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import image from "../images/osky.jfif"
import TypeWriterEffect from "react-typewriter-effect";
import PDF from "../arc/Cv full Stack developer - Oscar Burgos.pdf";
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import style from './About.module.css';
import { FaDownload } from 'react-icons/fa';
import { useWindowWidth } from '../utils/useWidth';


const About = ({title, id}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `
    I am a full stack web developer with experience in JavaScript, React, Redux, NodeJs, ExpressJS, postgreSQL and mongoDB. I have worked on challenging projects, such as the creation of a country application and a website focused on animal adoption among others, in which I have applied my technical skills to create effective solutions. Additionally, I've collaborated as a team with other developers and designers to deliver high-quality projects and have developed valuable interpersonal skills in the process. I am currently expanding my knowledge in TypeScript, Nextjs, material-mui, graphQl and looking to continue growing as a developer to achieve my long-term goals in the field of technology.
  `;

  const width = useWindowWidth();
  
    return ( 
        <div className={`${style.section} ${style.sectionWhite}`}>
           <div className={style.sectioncontent} id={id}>
            <h1>
               {title}
            </h1>            
            <div className={style.card}>
              <div className={style.header}>
              <div className={style.picture}>
                <img src={image} title="picture" className={style.cardMedia}/>
              </div>
              <div className={style.typeWriter}>
                  <TypeWriterEffect 
                      component='h1'
                      text="Hi, I am Oscar Burgos"
                      textStyle={{
                        fontSize: `${width*0.05}px`,
                        fontWeight: "10%", 
                        color: "tomato",   // Centra el texto   
                      }}
                      startDelay={100}
                      cursorColor="black"
                      typeSpeed={100}
                  />
                  <TypeWriterEffect 
                      text="i am Full Stack Web Developer"
                      textStyle={{
                        color: '#839192',
                        fontSize: `${width*0.03}px`,
                        fontWeight: "700px"
                      }}
                      component='h1'
                      startDelay={2500}
                      cursorColor="black"
                      typeSpeed={100}
                  />
              </div>
              </div>
              <div className={style.cardContent}>
                <div className={style.column}>
                  <TypeWriterEffect 
                      component='h1'
                      text="Hi, I am Oscar Burgos"
                      textStyle={{
                        fontSize: "2rem",
                        fontWeight: "10%", 
                        color: "tomato",
                      }}
                      startDelay={100}
                      cursorColor="black"
                      typeSpeed={100}
                  />
                  <TypeWriterEffect 
                      text="I am Full Stack Web Developer"
                      textStyle={{
                        color: '#34495e',
                        fontSize: "1.2rem",
                        fontWeight: "700px"
                      }}
                      component='h1'
                      startDelay={2500}
                      cursorColor="black"
                      typeSpeed={100}
                  />
                  <span>
                  I am a full-stack web developer with experience in JavaScript, React, Redux, Node.js, Express, PostgreSQL, and MongoDB. I have developed innovative solutions, including an animal adoption website and an online chess game built with Node.js, MongoDB, React, and WebSocket.
                  Currently, I am delving into mobile development with Dart and Flutter. I have already completed several projects and am now adapting my online chess game for this new platform. I am passionate about tackling challenges, collaborating with teams, and continuing to grow as a developer to achieve ambitious goals in the tech industry. </span>
                </div>
                <div className={style.span}>
                  <span>
                    {isExpanded ? text : `${text.slice(0, 150)}...`} {/* Mostrar parte del texto */}
                  </span>
                  <button onClick={toggleExpand} className={style.button}>
                    {isExpanded ? "Ver menos" : "Ver más"}
                  </button>
                </div>
                <div className={style.row}>
                <CardActions>
                  <button className={style.pdfButton}>
                    <a href={ PDF } download>
                        Downloand CV
                    </a>
                    <FaDownload size='20'/>
                  </button>
                </CardActions>
                <CardContent className={style.icon}>
                  <a className={style.iconButton}>
                      <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn style={{color: '#0077B5'}} className={style.iconSocial}/>
                      </Link>
                  </a>
                  <a className={style.iconButton}>
                      <Link href='https://wa.me/573042684860?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer' target='_blank' rel='noopener noreferrer'>
                        <WhatsApp style={{color: '#25D366'}} className={style.iconSocial}/>
                      </Link>
                  </a>
                  <a className={style.iconButton }>
                      <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                        <GitHub style={{color: '#0D1117'}} className={style.iconSocial}/>
                      </Link>
                  </a>
                </CardContent>
                </div>
              </div>
              
            </div>
           </div>
        </div>
     );
}

 
export default About;