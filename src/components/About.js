import { Button, Card, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import image from "../images/programador-web-1.jpg"
import TypeWriterEffect from "react-typewriter-effect";
import PDF from "../arc/Cv Oscar Burgos Desarrolador Web.pdf";

const About = ({title, dark, id}) => {

    const classes = useStyles();
    
    return ( 
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3">
               {title}
            </Typography>
            <Card className={classes.card}>
              <CardMedia image={image} title="picture" className={classes.cardMedia}/>
              <CardContent className={classes.cardContent}>
                <TypeWriterEffect 
                    text="Hi, I am Oscar Burgos"
                    textStyle={{
                      fontSize: "2rem",
                      fontWeight: "700px", 
                      color: "tomato"
                    }}
                    startDelay={100}
                    cursorColor="black"
                    typeSpeed={100}
                />
                <TypeWriterEffect 
                    text="And i am an awesome Full Stack Web Developer"
                    textStyle={{
                      fontSize: "1.2rem",
                      fontWeight: "700px"
                    }}
                    startDelay={2500}
                    cursorColor="black"
                    typeSpeed={100}
                />
                <Typography variant='h6' color='textSecondary'>
                  Full Stack con formación en el
                  desarrollo web. Tengo experiencia
                  trabajando en React y NodeJs, entre
                  otras tecnologías del sector.
                  También he desarrollado en equipo
                  utilizando metodologías como el
                  Scrum.

                  Mi mayor deseo es aplicar mi
                  potencial a las nuevas tecnologías y
                  las posibilidades que brindan. Soy un
                  persona adaptable, responsable y
                  voluntarioso.
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
    sectiondark: {
      background: '#333',
      color: '#fff'
    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",

    },
    card: {
      height: "70vh",
      display: "flex",
      marginTop: theme.spacing(6),
      position: "relative"
    },
    cardMedia: {
      width: "250px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5)
    },
    pdfButton:{
      position: "absolute",
      bottom: "5rem",
      right: "4rem",
      [theme.breakpoints.down("sm")]:{
          bottom: 10,
          right: "1rem"
      },
      backgroundColor: "tomato",
      padding: theme.spacing(3),
      "&:hover":{
          backgroundColor: "#fff",
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
      "& h6":{
        marginTop: theme.spacing(6),
        [theme.breakpoints.down("sm")]:{
          display: "none",
        }
      }
    }
  }))
 
export default About;