import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './WorkCard.css';

const WorkCard = props => {
    return (
        <div className="work-card">
            <div className="work-card__front">
                <div className="work-card-img__container">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="work-card-title__container">
                    <h3>{props.title}</h3>
                </div>
                <div className="work-card-desc__container">
                    <h5>
                        {props.subtitle}
                    </h5>
                    <ul>
                        {props.details.map(detail => {
                            return(
                                <li key={detail}>{detail}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="work-card__back">
                <div className="work-card-details__container">
                    <div className="link-to-site">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">Check it out!</a>
                    </div>
                    {(props.username && props.password) &&
                        <div className="username-password-totest">
                            <h5>Feel free to test with my credentials!</h5>
                            <p>Username: {props.username}</p>
                            <p>Password: {props.password}</p>
                        </div>
                    }
                    <div className="link-to-github">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /><br/>
                            Code Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;