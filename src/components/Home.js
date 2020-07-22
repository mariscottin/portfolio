import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Roll } from 'react-reveal';
import { Link } from 'react-scroll';
import './Home.css';
const Home = () => {
    return(
        <div id='homeSection' className='section home-section'>
            <div className='home-title__container'>
                <Zoom>
                    <h1>Hi! I'm Nico. Nice to meet you.</h1>
                    <h4>I am a self-tought, passionate web developer seeking for a change in my career to pursuit my passion: <br/>{'< '}Coding{' />'}</h4>
                </Zoom>
            </div>
            <Roll>
                <div className="scroll-icon__container">
                    <Link to="introSection" spy={true} smooth={true} offset={50} duration={800}>
                        <FontAwesomeIcon icon={faMouse} className="mouse-icon" />
                    </Link>
                    <Link to="introSection" spy={true} smooth={true} offset={50} duration={800}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrows-icon"/>
                    </Link>
                </div>
            </Roll>
        </div>
    )
}

export default Home;