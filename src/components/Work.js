import React from 'react';
import WorkCard from './WorkCard';
import { Zoom } from 'react-reveal';

import CapillaImg from '../assets/img/capilla-marin.png';
import Greenbook from '../assets/img/greenbook.png';
import AmazonClone from '../assets/img/amazon-clone.png';
import GolfamImg from '../assets/img/golfam.png';
import RockImg from '../assets/img/rock-paper-scissors.png';
import CountriesImg from '../assets/img/countries.png';


import './Work.css';

const Work = () => {
    return (
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
                            title="Green Book Academy"
                            img={Greenbook}
                            link="https://www.greenbookacademy.com"
                            github="https://github.com/mariscottin/greenbook"
                            subtitle="Landing page for customer"
                            details={['React JS', 'Bootstrap', 'i18next for language translation', 'Deployed to Heroku']}
                        />
                    </Zoom>
                </div>
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard
                            title="Amazon Clone"
                            img={AmazonClone}
                            link="https://clone-a5a50.web.app/"
                            github="https://github.com/mariscottin/amazon-clone"
                            subtitle="Amazon clone with payment functionality"
                            details={['React JS', 'Firestore as DB', 'Cloud Functions and authentication with Firebase', 'Deployed to Firebase']}
                        />
                    </Zoom>
                </div>

            </div>
            <div className="work__container">
                <div className="work-card__container">
                    <Zoom>
                        <WorkCard
                            title="Golfam Live Prototype"
                            img={GolfamImg}
                            link="https://golfamfrontend.z19.web.core.windows.net/"
                            github="https://github.com/mariscottin/golfam"
                            subtitle="A golf web app prototype for amateur players."
                            details={['React JS', 'Node JS for backend', 'Mongodb as DB', 'REST API deployed to Heroku', 'React App deployed to Azure']}
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