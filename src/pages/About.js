import React, { useState } from 'react';
import '../css/about.css';

const skillIcons = [
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        name: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    }
];

const About = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <div className="about-simple-wrapper about-large">
            <h1 className="about-simple-title about-large-title">About Me</h1>
            <p className="about-simple-desc about-large-desc">
                I’m a 3rd-year BSIT (Bachelor of Science in Information Technology) student at PHINMA Araullo University. I have a good foundation in programming and database management. I enjoy designing websites and learning new things to improve my skills. I’m passionate about using technology to solve problems and create useful, user-friendly solutions.
            </p>
            <h2 className="about-language-title">Pogramming Languages that I use</h2>
            <div className="about-simple-skills">
                {skillIcons.map((skill, idx) => (
                    <div
                        className={`about-simple-skill${hoveredIdx === idx ? ' hovered' : ''}`}
                        key={skill.name}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name + " icon"}
                            className="about-simple-skill-icon"
                        />
                        <span className="about-simple-skill-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;