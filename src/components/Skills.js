import { Typography } from '@mui/material';
import React from 'react';
import Technologies from './Technologies';
import style from './Skill.module.css';

const Skills = ({title, id}) => {

    return ( 
        <div className={`${style.section} ${style.sectiondark}`}>
          <div className={style.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Technologies />
           </div>
        </div>
     );
}
 
export default Skills;