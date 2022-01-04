import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '@fontsource/bungee';
import '@fontsource/space-mono';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../../data/Bachmann_Resume.pdf';
import * as styles from '../styles/index.module.css';

const IndexPage = () => (
  <>
    <title>Matt Bachmann</title>
    <header>
      <div>
        <h1>Matt Bachmann</h1>
        <h2>Software Engineer, curious maker</h2>
        <StaticImage src="../../data/images/bach.png" width={200} alt="me!" loading="eager" />
        <p>Howdy! Welcome to my project portfolio.</p>
      </div>
    </header>
    <main>
      {/* Software Projects */}
      {/* Electronics Projects */}
      {/* Pens/turning projects */}
      {/* Conference Talks */}
      <a href={resume}>Resume</a>
      <Link to="/electronicsProjects/">Electronics Projects</Link>
    </main>
    <footer>
      <div class={styles.social}>
        <a href="https://github.com/Bachmann1234">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/MattBachmann">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/matt-bachmann-34b56850/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  </>
);

export default IndexPage;
