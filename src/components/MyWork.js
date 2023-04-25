import { CardContent, CardMedia, Grid, Typography, makeStyles, Card, Link, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import { data } from '../data/data';
import deployIcon from '../images/code/deploy.png';


const MyWork = ({title, id}) => {
   
        const classes = useStyles();

    return ( 
        <div className={`${classes.section} ${classes.sectionDark}`}>
          <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Grid container className={classes.grid}>
               {
                 data.map(({title, image, deploy, github}, index)=>(
                   <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia image={image} titulo='cartula' className={classes.caratura} />
                        <CardContent>
                           {title}
                        </CardContent>
                        <IconButton   marginLetf='5%'>
                          <Link href={github} target='_blank' rel='noopener noreferrer'>
                           <GitHubIcon className={classes.icon} height="25px"/>
                          </Link>
                        </IconButton>
                        {
                          deploy &&
                        <IconButton marginLetf='5%' color='primary'>
                           <Link href={deploy} target='_blank' rel='noopener noreferrer'>
                             <img src={deployIcon} alt='not found' height='25px' className={classes.icon}/>
                           </Link>
                        </IconButton>
                        }
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
    sectionDark: {
      background: 'linear-gradient(181.2deg, rgb(12, 52, 131) 10.5%, rgb(254, 254, 254) 86.8%)',
      color: '#fff'
    },
    sectioncontent:{
      maxWidth: "90vw",
      margin: "0 auto", 
      padding: theme.spacing(5),
      "& h3":{
        fontSize: "2rem"
      }
    },
    grid:{
      marginTop: theme.spacing(10),
    },
    card:{
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
      transition:'0.5s',
      '&:hover':{
        maxWidth: 400,
        minHeight: 300,
        
      }
    },
    caratura:{
      height: 0,
      paddingTop: '56.25%',
    },
    icon: {
      color: 'black',
      transition: '0.5s',
      '&:hover':{
        cursor: 'pointer',
        height: '30px'
      }
    }
  }))

 
export default MyWork;