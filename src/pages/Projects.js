import React, { useState } from "react";
import "../css/projects.css";
import votingSystemImg from '../images/voting_system.jpg';
import cinemaSystemImg from '../images/cinema_ticketing_system.jpg';
import carRentalSystemImg from '../images/car_rental_system.jpg';

const projectsData = [
    {
        title: "Voting System",
        year: "2024",
        image: votingSystemImg,
        description: "A voting system project for PHINMA AU SOUTH Campus.",
        languages: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
        title: "Cinema Ticketing System",
        year: "2023",
        image: cinemaSystemImg,
        description: "A ticketing system design for small theatre.",
        languages: ["Java"]
    },
    {
        title: "Rental Management and Monitoring Systemh",
        year: "2024",
        image: carRentalSystemImg,
        description: "A car rental management and monitoring sytem.",
        languages: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    }
];

const Projects = () => {
    const [modalImg, setModalImg] = useState(null);

    return (
        <div className="projects-cards-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-cards-grid">
                {projectsData.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-card-image"
                            onClick={() => setModalImg(project.image)}
                            style={{ cursor: "pointer" }}
                        />
                        <div className="project-card-content">
                            <div className="project-card-year">{project.year}</div>
                            <h2 className="project-card-title">{project.title}</h2>
                            <p className="project-card-description">{project.description}</p>
                            <div className="project-card-languages">
                                <span className="project-card-languages-label">Programming Languages Used:</span>
                                <ul className="project-card-languages-list">
                                    {project.languages.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {modalImg && (
                <div className="project-modal-overlay" onClick={() => setModalImg(null)}>
                    <div className="project-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="project-modal-close" onClick={() => setModalImg(null)}>&times;</button>
                        <img src={modalImg} alt="Enlarged project" className="project-modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;