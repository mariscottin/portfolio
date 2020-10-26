import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__nav">
                    <Link
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        Nico Mariscotti
                    </Link>
                </div>
                <div className="navbar__nav">
                    <Link
                        className="navbar__nav-skills"
                        activeClass="active"
                        to="skillsSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        My skills
                    </Link>
                    <Link
                        className="navbar__nav-work"
                        activeClass="active"
                        to="workSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        My Work
                    </Link>
                    <div className="contact-btn">
                        <Link
                            activeClass={null}
                            to="contactSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}>
                            Let's talk!
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;