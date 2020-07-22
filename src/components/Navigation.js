import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
    return(
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar-brand">
                    Nico Mariscotti
                </div>
                <div className="contact-btn">
                    <Link to="contactSection" spy={true} smooth={true} offset={50} duration={800}>
                        Let's talk!
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;