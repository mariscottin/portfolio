import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
           <div className="footer__container">
               <div className="social-networks__container">
                    <a href="https://github.com/mariscottin" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/nicolasmariscotti" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/nicomaris" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.facebook.com/nico.mariscotti.9/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="mailto:nicolas.mariscotti93@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                    </a>
               </div>
               <div className="footer-brand">
                <Link to="homeSection" spy={true} smooth={true} offset={-80} duration={800}>
                   Nico Mariscotti
                </Link>
               </div>
           </div>
        </div>
    )
}

export default Footer;