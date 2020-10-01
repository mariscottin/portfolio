import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCogs, faTools } from "@fortawesome/free-solid-svg-icons";
import './SkillsCard.css';

const SkillsCard = () => {
    return (
        <div className="skills-card">
            <div className="title">
                <h1>Skills</h1>
            </div>
            <div className="skills-container">
                <div className="column">
                    <div className="skill-title">
                        <FontAwesomeIcon icon={faCode} className="skill-icon" />
                        <h3>Frontend</h3>
                    </div>
                    <div className="skills-list__container">
                        <ul>
                            <li>
                                HTML5
                                </li>
                            <li>
                                CSS3
                                </li>
                            <li>
                                Javascript
                                </li>
                            <li>
                                React js
                                </li>
                            <li>
                                Bootstrap
                                </li>
                            <li>
                                JQuery
                                </li>
                            <li>
                                Gatsby
                                </li>
                            <li>
                                EJS
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="column center-column">
                    <div className="skill-title">
                        <FontAwesomeIcon icon={faCogs} className="skill-icon" />
                        <h3>Backend</h3>
                    </div>
                    <div className="skills-list__container">
                        <ul>
                            <li>
                                Node JS
                                </li>
                            <li>
                                Express
                                </li>
                            <li>
                                Mongodb
                                </li>
                            <li>
                                PostgreSQL
                                </li>
                            <li>
                                REST
                                </li>
                            <li>
                                AWS S3
                                </li>
                            <li>
                                Heroku
                                </li>
                            <li>
                                Azure Storage
                                </li>
                            <li>
                                Firebase
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="column last-column">
                    <div className="skill-title">
                        <FontAwesomeIcon icon={faTools} className="skill-icon" />
                        <h3>Tools &amp; Technologies</h3>
                    </div>
                    <div className="skills-list__container">
                        <ul>
                            <li>
                                Git
                                </li>
                            <li>
                                Github
                                </li>
                            <li>
                                Postman
                                </li>
                            <li>
                                Terminal
                                </li>
                            <li>
                                VS Code
                                </li>
                            <li>
                                npm
                            </li>
                            <li>
                                JSON
                            </li>
                            <li>
                                AJAX
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard;