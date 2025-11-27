import { CardContent, CardMedia, Grid, Typography, Card, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { data } from "../data/data";
import deployIcon from "../images/code/deploy.png";
import style from "./MyWork.module.css";
import Carousel from "./carousel/Carousel";
import { GitHub } from "@mui/icons-material";
import { FaRocket } from "react-icons/fa";

const MyWork = ({ title, id }) => {
  return (
    <section className={`${style.section} ${style.sectionDark}`} id={id}>
      <div className={style.sectionContent}>
        <Typography variant="h3" component="h2" className={style.title}>
          {title}
        </Typography>
        <p className={style.subtitle}>
          Selected projects that show how I combine clean code, product thinking and real-world impact.
        </p>

        {/* Feature Project */}
        <div className={style.featured}>
          <div className={style.featuredInfo}>
            <h3 className={style.featuredTitle}>ChessFive · Real-time Chess Platform</h3>
            <p className={style.featuredText}>
              ChessFive is a full online chess ecosystem with real-time matches, ranking system,
              coins, achievements and monetization. Frontend built with Flutter and React for web,
              backend with Node.js / FastAPI and MongoDB, real-time communication via Socket.IO,
              and full integration with Firebase (auth, analytics, crashlytics).
            </p>
            <ul className={style.featuredList}>
              <li>Real-time multiplayer and reconnection logic.</li>
              <li>Rankings, coins, rewards and tournaments.</li>
              <li>Mobile app published on Google Play.</li>
            </ul>
            <div className={style.featuredButtons}>
              <Link
                href="https://github.com/Oskarp88/chessKnight"
                sx={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.buttonGithub}>
                  <span>GitHub</span>
                  <GitHub className={style.iconGithub} />
                </button>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.chessfive.app"
                sx={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.buttonDeploy}>
                  <span>Live demo</span>
                  <FaRocket className={style.iconDeploy} />
                </button>
              </Link>
            </div>
          </div>
          <div className={style.featuredCarousel}>
            <Carousel />
            <span className={style.featuredCaption}>ChessFive · Web Preview</span>
          </div>
        </div>

        {/* Grid of more projects */}
        <Grid container spacing={3} className={style.grid}>
          {data.map(({ title, image, deploy, github, skills }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={style.card}>
                <CardMedia image={image} title={title} className={style.cover} />
                <CardContent className={style.cardContent}>
                  <Typography variant="h6" component="h3" className={style.cardTitle}>
                    {title}
                  </Typography>
                  <Typography variant="body2" className={style.cardSkills}>
                    {skills}
                  </Typography>
                </CardContent>
                <CardContent className={style.cardActions}>
                  <IconButton>
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon className={style.icon} />
                    </Link>
                  </IconButton>
                  {deploy && (
                    <IconButton color="primary">
                      <Link href={deploy} target="_blank" rel="noopener noreferrer">
                        <img src={deployIcon} alt="Deploy" className={style.iconImage} />
                      </Link>
                    </IconButton>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default MyWork;
