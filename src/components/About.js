import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import image from "../images/programador-web-1.jpg"
import TypeWriterEffect from "react-typewriter-effect";

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
                      fontWeight: "700px", color: "tomato"
                    }}
                />
              </CardContent>
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
    }
  }))
 
export default About;