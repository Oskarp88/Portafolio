import { CardContent, CardMedia, Grid, Typography, makeStyles, Card, Link } from '@material-ui/core';
import React from 'react';
import { data } from '../data/data';


const MyWork = ({title, dark, id}) => {
   
        const classes = useStyles();

    return ( 
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
          <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3">
               {title}
            </Typography>
            <Grid container className={classes.grid}>
               {
                 data.map(({title, image, deploy, github}, index)=>(
                   <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia image={image} classname={classes.caratura} titulo='image'/>
                        <CardContent>
                           <Link href={github} color='primary' target='_blank' rel='noopener noreferrer'>{title}</Link>
                        </CardContent>
                      </Card>
                   </Grid>
                 ))
               }
            </Grid>
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
      maxWidth: "90vw",
      margin: "0 auto", 
      padding: theme.spacing(5)     
    },
    grid:{
      marginTop: theme.spacing(10),
    },
    card:{
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
    },
    caratura:{
      height: 0,
      paddingTop: '56.25%',
    }
  }))

 
export default MyWork;