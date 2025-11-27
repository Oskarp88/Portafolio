import { Typography } from "@mui/material";
import React from "react";
import Technologies from "./Technologies";
import style from "./Skill.module.css";

const Skills = ({ title, id }) => {
  return (
    <section className={`${style.section} ${style.sectionDark}`} id={id}>
      <div className={style.sectionContent}>
        <Typography variant="h3" component="h2" className={style.title}>
          {title}
        </Typography>
        <p className={style.subtitle}>
          A quick timeline of the technologies I use the most and how my stack has evolved.
        </p>
        <Technologies />
      </div>
    </section>
  );
};

export default Skills;
