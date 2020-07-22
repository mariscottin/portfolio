import React from 'react';
import WorkCard from './WorkCard';
import { Zoom } from 'react-reveal';

import CapillaImg from '../assets/img/capilla-marin.png';
import GolfamImg from '../assets/img/golfam.png';
import RockImg from '../assets/img/rock-paper-scissors.png';
import CountriesImg from '../assets/img/countries.png';


import './Work.css';

const Work = () => {
    return(
        <div id="workSection" className="section work-section">
            <div className="title">
                <Zoom>
                    <h1>My most recent work</h1>
                </Zoom>
            </div>
            <div className="work__container">
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard 
                        title="Capilla Marin" 
                        img={CapillaImg} 
                        link="https://capillamarin.org.ar" 
                        github="https://github.com/mariscottin/capillamarin"
                        subtitle="Church website with custom-made admin portal."
                        details={['Node JS for backend', 'EJS as View Engine', 'PostgreSQL as DB', 'AWS S3 for media storage', 'Deployed to Heroku']}
                        />
                    </Zoom>
                </div>
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard 
                        title="Golfam Live Prototype" 
                        img={GolfamImg} 
                        link="https://capillamarin.org.ar"
                        github="https://github.com/mariscottin/capillamarin"
                        subtitle="A golf web app for amateur players, and a management software for golf courses (both prototypes)."
                        details={['React JS for frontend', 'Node JS for backend', 'Mongodb as DB']}
                        username="113113"
                        password="113113113"
                        />
                    </Zoom>
                </div>
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard 
                        title="Rock Paper Scissors" 
                        img={RockImg} 
                        link="https://rock-paper-scissors-iota.vercel.app/"
                        github="https://github.com/mariscottin/rock_paper_scissors"
                        subtitle="A frontendmentor.io advanced challenge."
                        details={['React JS', 'Local browser storage to save score', 'Deployed to Vercel']}
                        />
                    </Zoom>
                </div>
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard 
                        title="Countries App" 
                        img={CountriesImg} 
                        link="https://rest-countries-app.vercel.app/"
                        github="https://github.com/mariscottin/rest-countries-app"
                        subtitle="A frontendmentor.io advanced challenge."
                        details={['React JS', 'Fetch requests to restcountries.eu API', 'Deployed to Vercel']}
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Work;