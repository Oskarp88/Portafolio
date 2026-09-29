# Oscar Burgos Portfolio

A personal portfolio presenting selected backend, web and mobile development work. The site introduces Oscar Burgos as a Full Stack Developer and distinguishes projects in active development from earlier work.

## Stack

The portfolio itself is a React 18 single-page application written in JavaScript. It uses Create React App, CSS Modules, Material UI, React Scroll, React Slick, Formik, Yup and EmailJS. Technologies listed on the site also describe other projects; they are not all dependencies of this portfolio.

## Structure

- `src/App.js` assembles the page sections.
- `src/components/` contains navigation, About, Skills, Projects and Contact UI.
- `src/data/data.js` contains the Other Projects cards.
- `src/images/` and `public/assets/images/` contain portfolio images and project screenshots.
- `src/arc/` contains CV files; About currently imports `Oscar_Burgos_CV.pdf`.
- `public/index.html` contains the page title and basic metadata.

## Run locally

Use a supported Node.js/npm installation. From the repository root:

    npm ci
    npm start

Create React App serves the development site at `http://localhost:3000` by default. To make a production build:

    npm run build

The build output is written to `build/`. The available test command is `npm test`; this repository currently contains no project-specific test files.

## Working branch and publication

Content refresh work is being prepared on `portfolio-refresh-2026`. Review and test changes there before any decision about merging or deploying. The source of some featured projects may be private or otherwise unavailable publicly, so project cards should only link to verified public destinations.

The contact form uses EmailJS. Confirm its service configuration and delivery before relying on it for production contact. Deployment settings for Vercel are not stored in this repository.
