import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Sidebanner.css';

function Sidebanner() {
    return (
        <div className="sideBanner">
            <div className="sideBanner__logo">
                <a href="https://github.com/mariscottin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="sideBanner__logo">
                <a href="https://www.linkedin.com/in/nicolasmariscotti" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div className="sideBanner__logo">
                <a href="https://twitter.com/nicomaris" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="sideBanner__logo">
                <a href="https://www.facebook.com/nico.mariscotti.9/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            <div className="sideBanner__logo">
                <a href="mailto:nicolas.mariscotti93@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    )
}

export default Sidebanner
