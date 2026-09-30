import React from "react";
import style from "./Technologies.module.css";

const skillGroups = [
  { title: "Backend", skills: ["Node.js", "TypeScript", "NestJS", "Express.js", "Python", "FastAPI", "REST APIs"] },
  { title: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS"] },
  { title: "Mobile", skills: ["Flutter", "Dart"] },
  { title: "Databases & data", skills: ["PostgreSQL", "MongoDB", "Redis"] },
  { title: "Tools & infrastructure", skills: ["Docker", "Git", "GitHub"] },
];

const Technologies = () => (
  <div className={style.groups}>
    {skillGroups.map(({ title, skills }) => (
      <div className={style.group} key={title}>
        <h3 className={style.groupTitle}>{title}</h3>
        <ul className={style.skillList}>
          {skills.map((skill) => <li className={style.skill} key={skill}>{skill}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export default Technologies;
