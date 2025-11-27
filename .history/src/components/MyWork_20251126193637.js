import { CardContent, CardMedia, Grid, Typography, Card, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { data } from '../data/data';
import deployIcon from '../images/code/deploy.png';
import style from './MyWork.module.css';
import Carousel from './carousel/Carousel';
import { GitHub} from '@mui/icons-material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';


const MyWork = ({title, id}) => {

    return ( 
        <div className={`${style.section} ${style.sectionDark}`}>
          <div className={style.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
           <div className={style.carousel}>
              
            <div className={style.info}>
               <h3>ChessFive</h3>
               <span>
                 I developed an online chess game using React for the interface, Node.js and MongoDB for the backend, and WebSocket for real-time communication between players. The game features dynamic matches with instant updates for moves and live chat functionality. The user interface and interaction are carefully designed using modular CSS for encapsulated and customized styles. Additionally, it includes features like player rankings and game history tracking, ensuring a complete and competitive experience. It’s a platform designed for both chess enthusiasts and beginners alike.
               </span>
                <div className={style.buttonsCarousel}>
                  <Link href='https://github.com/Oskarp88/chessKnight' sx={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
                    <button className={style.buttonGithub}> 
                      <span>GitHub</span>
                      <GitHub className={style.iconGithub}/>
                    </button>
                  </Link>
                  <Link href='https://chessfive.vercel.app/' sx={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
                    <button className={style.buttonDeploy}> 
                      <span>Deploy</span>
                      <FaRocket className={style.iconDeploy}/>
                    </button>
                  </Link>
                </div>
                
            </div>
            <Carousel/>
            <span>ChessFive</span>
           </div>
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