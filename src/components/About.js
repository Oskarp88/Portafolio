import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import image from "../images/osky.jfif"
import TypeWriterEffect from "react-typewriter-effect";
import PDF from "../arc/Cv full Stack developer Oscar Burgos.pdf";
import { GitHub, LinkedIn, WhatsApp } from '@material-ui/icons';


const About = ({title, id}) => {

    const classes = useStyles();
    
    return ( 
        <div className={`${classes.section} ${classes.sectionWhite}`}>
           <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3" component="h3">
               {title}
            </Typography>
            <CardContent className={classes.icon}>
              <IconButton className={classes.button}>
                  <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn/>
                  </Link>
              </IconButton>
              <IconButton className={classes.button}>
                  <Link href='https://wa.me/573004582128?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer' target='_blank' rel='noopener noreferrer'>
                    <WhatsApp/>
                  </Link>
              </IconButton>
              <IconButton className={classes.button}>
                  <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                    <GitHub/>
                  </Link>
              </IconButton>
            </CardContent>
            <Card className={classes.card}>
              <CardMedia image={image} title="picture" className={classes.cardMedia}/>
              <CardContent className={classes.cardContent}>
                <TypeWriterEffect 
                    component='h1'
                    text="Hi, I am Oscar Burgos"
                    className={classes.writer}
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
                      color: '#fff',
                      fontSize: "1.2rem",
                      fontWeight: "700px"
                    }}
                    component='h1'
                    startDelay={2500}
                    cursorColor="black"
                    typeSpeed={100}
                />
                <Typography variant='h6' color='textSecondary'>
                I am a full stack web developer with experience in JavaScript, React, Redux, NodeJs, ExpressJS, postgreSQL and mongoDB. I have worked on challenging projects, such as the creation of a country application and a website focused on animal adoption among others, in which I have applied my technical skills to create effective solutions. Additionally, I've collaborated as a team with other developers and designers to deliver high-quality projects and have developed valuable interpersonal skills in the process. I am currently expanding my knowledge in TypeScript, Nextjs, material-mui, graphQl and looking to continue growing as a developer to achieve my long-term goals in the field of technology.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' className={classes.pdfButton}>
                   <a href={ PDF } download>
                       Downloand CV
                   </a>
                </Button>
              </CardActions>
            </Card>
           </div>
        </div>
     );
}

const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: "100vh",
    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",     
      "& h3":{
        fontSize: "2rem",
      },
      [theme.breakpoints.down('xs')]:{
        maxWidth: "100vw",
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
      },   
    },
    icon: {
      float: 'right', 
      [theme.breakpoints.down('xs')]:{
        display: 'flex',
        float: 'none'
      }    
    },
    button:{
      [theme.breakpoints.down('xs')]:{
        display: 'block',
        marginBottom: '0',
        marginLeft: '2rem',
        padding: '0'
      },   
      display: 'block',
      marginBottom: '1.5rem'
    },
    sectionWhite:{
      // background: 'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)',
      background: 'linear-gradient(359.3deg, rgb(162, 182, 223) 1%, rgba(222, 214, 214, 0) 70.9%)'
    },
    card: {
      height: "70vh",
      display: "flex",
      marginTop: theme.spacing(6),
      position: "relative",
      background: 'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)',
      [theme.breakpoints.down("xs")]:{
        marginTop: theme.spacing(2),
        height: "85vh",
        display: 'block'
      }
    },
    cardMedia: {      
      width: "1000px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5),
      [theme.breakpoints.down("sm")]:{
        width: '400px',
        height: '100px',
        borderRadius: '50%',
        margin: theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]:{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: 'auto',
        marginTop: '5px'
      }
    },
    pdfButton:{
      position: "absolute",
      bottom: "5rem",
      right: "4rem",
      [theme.breakpoints.down("sm")]:{
          bottom: 10,
          right: "1rem"
      },
      [theme.breakpoints.down("xs")]:{
        with: '500px',
        bottom: 18,
        padding: theme.spacing(0.5),
      },
      backgroundColor: "tomato",
      padding: theme.spacing(3),
      "&:hover":{
          backgroundColor: "#a783fe",
      },
      "& a":{
         color: "#fff",
         textDecoration: "none",
         fontWeight: 900
      },
      "& a:hover": {
        color: "tomato",
      }
    },
    cardContent:{
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("xl")]:{
        marginTop: theme.spacing(0.5),
      },
      "& h6":{
        color: '#fff',
        marginTop: theme.spacing(6),
        [theme.breakpoints.down("sm")]:{
          marginTop: theme.spacing(4),
          fontSize: '1rem'
        },
        [theme.breakpoints.down("xl")]:{
          fontSize: '1rem'
        },
        [theme.breakpoints.down("xs")]:{
          marginTop: theme.spacing(1.5),
          fontSize: '0.78rem'
        },
        
        
      },
    }
  }))
 
export default About;