import { CardContent, CardMedia, Grid, Typography, Card, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { data } from '../data/data';
import deployIcon from '../images/code/deploy.png';
import style from './MyWork.module.css';

const MyWork = ({title, id}) => {

    return ( 
        <div className={`${style.section} ${style.sectionDark}`}>
          <div className={style.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Grid container className={style.grid}>
               {
                 data.map(({title, image, deploy, github, skills}, index)=>(
                   <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card className={style.card}>
                        <CardMedia image={image} titulo='cartula' className={style.caratura} />
                        <CardContent>
                           {title}
                        </CardContent>
                        <CardContent>
                          {skills}
                        </CardContent>
                        <IconButton   marginLetf='5%'>
                          <Link href={github} target='_blank' rel='noopener noreferrer'>
                           <GitHubIcon className={style.icon} height="25px"/>
                          </Link>
                        </IconButton>
                        {
                          deploy &&
                        <IconButton marginLetf='5%' color='primary'>
                           <Link href={deploy} target='_blank' rel='noopener noreferrer'>
                             <img src={deployIcon} alt='not found' height='25px' className={style.icon}/>
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

 
export default MyWork;