import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Technologies from './Technologies';

const Skills = ({title, id}) => {
    
    const classes = useStyles();

    return ( 
        <div className={`${classes.section} ${classes.sectiondark}`}>
          <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Technologies />
           </div>
        </div>
     );
}

const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: "100vh",
    },
    sectiondark: {
      background: 'linear-gradient(to top, rgb(12, 52, 131) 0%, rgb(162, 182, 223) 100%, rgb(107, 140, 206) 100%, rgb(162, 182, 223) 100%)',
      color: '#fff'
    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",
      "& h3":{
        fontSize: "2rem"
      }
    }
  }))
 
export default Skills;