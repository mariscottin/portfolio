import React from 'react';
import SkillsCard from './SkillsCard'
import { Zoom } from 'react-reveal';

import './Skills.css';
const Skills = () => {
    return (
        <div id='skillsSection' className='section skills-section'>
            <Zoom>
                <SkillsCard />
            </Zoom>
        </div>
    )
}

export default Skills;