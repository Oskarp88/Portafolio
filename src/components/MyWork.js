import { CardContent, CardMedia, Grid, Typography, Card, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { data } from "../data/data";
import deployIcon from "../images/code/deploy.png";
import style from "./MyWork.module.css";
import Carousel from "./carousel/Carousel";

const MyWork = ({ title, id }) => {
  return (
    <section className={`${style.section} ${style.sectionDark}`} id={id}>
      <div className={style.sectionContent}>
        <Typography variant="h3" component="h2" className={style.title}>
          {title}
        </Typography>
        <p className={style.subtitle}>
          Selected work across real-time applications, backend systems and mobile products.
        </p>

        <div className={style.featured}>
          <div className={style.featuredInfo}>
            <h3 className={style.featuredTitle}>ChessFive · Real-time Chess Platform</h3>
            <span className={style.status}>Current version: active development · staging and internal testing</span>
            <p className={style.featuredText}>
              ChessFive began as a web chess platform and is now being developed as a new
              multiplatform version. The current version includes authentication, multiplayer
              matches, ranking and progression, and real-time features.
            </p>
            <p className={style.version}><strong>Original web version:</strong> React, Node.js,
              Express, MongoDB, Socket.IO and JWT. This was the first major version of the project.</p>
            <p className={style.version}><strong>Current version:</strong> Node.js/Express, MongoDB,
              Redis and Flutter. It is in staging and internal testing.</p>
            <p className={style.projectNote}>An earlier version was published on Google Play.
              The current version is not publicly available there.</p>
          </div>
          <div className={style.featuredCarousel}>
            <Carousel />
            <span className={style.featuredCaption}>ChessFive project screenshots</span>
          </div>
        </div>

        <div className={style.highlightGrid}>
          <article className={style.highlightCard}>
            <span className={style.status}>Active development / testing</span>
            <h3 className={style.featuredTitle}>EarnFive · Rewards Platform</h3>
            <p className={style.featuredText}>A rewards platform in active development with a
              TypeScript backend and Flutter app. It uses MongoDB, Redis and Docker.</p>
            <p className={style.featuredText}>Its implemented areas include Argon2id/JWT authentication,
              profiles and devices, a wallet and transactions, antifraud mechanisms, survey and
              offerwall integration, withdrawal workflows, and AES-256-GCM encryption for sensitive
              payout information.</p>
            <p className={style.featuredText}>Administrative tools, audit activity, notifications,
              health and readiness endpoints, rate limiting, and automated tests support development
              and validation.</p>
            <p className={style.projectNote}>In testing; not publicly available or processing real payouts in production.</p>
          </article>
          <article className={style.highlightCard}>
            <span className={style.status}>Client project</span>
            <h3 className={style.featuredTitle}>ClashCycle · Loan Management</h3>
            <p className={style.featuredText}>Mobile loan management application developed for a client.</p>
            <p className={style.featuredText}>Built with Flutter and Dart, with a Python/FastAPI
              backend and MongoDB. The app supports client registration, interest-bearing loan
              creation, payment tracking and outstanding balance calculations.</p>
          </article>
        </div>

        <h3 className={style.otherTitle}>Other Projects</h3>
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
