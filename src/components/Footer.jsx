import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles.css'; // Import your custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <div className="social-links">
          <a
            href="https://github.com/techpraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://open.spotify.com/user/your-spotify-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;