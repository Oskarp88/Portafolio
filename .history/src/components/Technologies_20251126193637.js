import React from 'react';
import reactJS from '../images/skills/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac250cda95.4452823815233628530527.png';
import javaScript from '../images/skills/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294.png'; 
import Redux from '../images/skills/kisspng-redux-react-javascript-library-application-softwar-egghead-intro-to-redux-5bf74afd47b7f1.1525757215429332452938.png';
import HTML from '../images/skills/kisspng-web-development-html-responsive-web-design-logo-ja-html-5ae04a9526c592.7493066215246485971588.png';
import Node from '../images/skills/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png';
import Postgres from '../images/skills/kisspng-postgresql-logo-computer-software-database-open-source-vector-images-5aaa26e1ef9611.3514090315211005139814.png';
import mongodb from '../images/skills/kisspng-mongodb-nosql-database-computer-icons-5b07afd24ea653.7191630815272304183222.png';
import flutter from '../images/skills/flutter.png';
import python from '../images/skills/python.png';
import css from '../images/skills/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png';
import { 
    Timeline, 
    TimelineItem, 
    TimelineOppositeContent, 
    TimelineSeparator, 
    TimelineDot, 
    TimelineConnector, 
    TimelineContent 
  } from '@mui/lab';
  import { Typography, Paper } from '@mui/material'; 
  import StarRating from './StarRating';
  import style from './Technologies.module.css';

const Technologies = () => {

    const skills = [
        {    
            year: 2022,
            src: javaScript,
            title: "JavaScript ES6",
            stars: 4
        },

        {
            year: 2022,
            src: reactJS,
            title: "React JS",
            stars: 5,
        },
        {
            year: 2024,
            src: flutter,
            title: "Flutter",
            stars: 5,
        },
        {
            year: 2024,
            src: python,
            title: "Python",
            stars: 4,
        },
        {
            year: 2022,
            src: Redux,
            title: "Redux",
            stars: 5,
        },
        {
            year: 2022,
            src: Node,
            title: 'Node JS',
            stars: 4,
        },
        {
            year: 2022,
            src: HTML,
            title: 'HTML',
            stars: 5,
        },
        {
            year: 2023,
            src: css,
            title: 'CSS',
            stars: 4,
        },
        {
            year: 2023,
            src: mongodb,
            title: 'MongoDB',
            stars: 4,
        },
        {
            year: 2022,
            src: Postgres,
            title: 'PostgreSQL',
            stars: 3.5,
        }
    ]
    
    return ( 
       <Timeline align='left'>
           {
              skills.map(({year,src, title, stars}, index) =>(
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="white">
                           {year}
                        </Typography>                          
                    </TimelineOppositeContent> 
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={src} alt={title} className={style.customlogo}/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator> 
                    <TimelineContent>
                        <Paper elevation={3} className={style.paper}>
                            <Typography variant='h6' component='h1'>
                               {title}
                            </Typography>
                            <StarRating stars={stars}/>
                        </Paper>
                    </TimelineContent>                     
                </TimelineItem>
              ))
           }
       </Timeline>
     );
}

 
export default Technologies;