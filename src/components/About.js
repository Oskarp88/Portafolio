import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material';
import React from 'react';
import image from "../images/osky.jfif"
import TypeWriterEffect from "react-typewriter-effect";
import PDF from "../arc/oscarDeveloperCV.pdf";
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import style from './About.module.css';

const About = ({title, id}) => {
    
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
                        fontSize: "2rem",
                        fontWeight: "10%", 
                        color: "tomato",
                      }}
                      startDelay={100}
                      cursorColor="black"
                      typeSpeed={100}
                  />
                  <TypeWriterEffect 
                      text="i am Full Stack Web Developer"
                      textStyle={{
                        color: '#000',
                        fontSize: "1.2rem",
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
                      text="i am Full Stack Web Developer"
                      textStyle={{
                        color: '#000',
                        fontSize: "1.2rem",
                        fontWeight: "700px"
                      }}
                      component='h1'
                      startDelay={2500}
                      cursorColor="black"
                      typeSpeed={100}
                  />
                  <span>
                    I am a full stack web developer with experience in JavaScript, React, Redux, NodeJs, ExpressJS, postgreSQL and mongoDB. I have worked on challenging projects, such as the creation of a country application and a website focused on animal adoption among others, in which I have applied my technical skills to create effective solutions. Additionally, I've collaborated as a team with other developers and designers to deliver high-quality projects and have developed valuable interpersonal skills in the process. I am currently expanding my knowledge in TypeScript, Nextjs, material-mui, graphQl and looking to continue growing as a developer to achieve my long-term goals in the field of technology.
                  </span>
                </div>
                <div className={style.span}>
                  <span>
                    I am a full stack web developer with experience in JavaScript, React, Redux, NodeJs, ExpressJS, postgreSQL and mongoDB. I have worked on challenging projects, such as the creation of a country application and a website focused on animal adoption among others, in which I have applied my technical skills to create effective solutions. Additionally, I've collaborated as a team with other developers and designers to deliver high-quality projects and have developed valuable interpersonal skills in the process. I am currently expanding my knowledge in TypeScript, Nextjs, material-mui, graphQl and looking to continue growing as a developer to achieve my long-term goals in the field of technology.
                  </span>
                </div>
                <div className={style.row}>
                <CardActions>
                  <Button variant='contained' className={style.pdfButton}>
                    <a href={ PDF } download>
                        Downloand CV
                    </a>
                  </Button>
                </CardActions>
                <CardContent className={style.icon}>
                  <IconButton className={style.button}>
                      <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn/>
                      </Link>
                  </IconButton>
                  <IconButton className={style.button}>
                      <Link href='https://wa.me/573042684860?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer' target='_blank' rel='noopener noreferrer'>
                        <WhatsApp/>
                      </Link>
                  </IconButton>
                  <IconButton className={style.button}>
                      <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                        <GitHub/>
                      </Link>
                  </IconButton>
                </CardContent>
                </div>
              </div>
              
            </div>
           </div>
        </div>
     );
}

 
export default About;