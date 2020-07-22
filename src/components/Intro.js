import React from 'react';
import { Zoom } from 'react-reveal';

import './Intro.css';
const Intro = () => {
    return(
        <div id='introSection' className='section intro-section'>
            <div className="intro__container">
                <div className="intro-1__container">
                    <Zoom>
                        <h1>A little bit about myself</h1>
                        <p>I am currenty working at <a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer" className="microsoft-link">Microsoft</a> Argentina as an Account Delivery Executive, and coding on my spare time!</p>
                        <p>I've been doing web development as a hobby for the past few years, but I now want to make a career out of it to continue learning and growing.</p>
                        <p>I am a well-organized person, a problem solver, a fast-learner and a teamworker with high attention to detail.</p>
                        <p>I love golf and soccer. I don't like chocolate.</p>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Intro;