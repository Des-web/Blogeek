import React from 'react';
import './style.css';

function ProjectCard({ description, imgsrc, alt }) {
    return (
        <div className="projectCard">
            <img src={imgsrc} alt={alt || "Project Image"} width="278px" height="184px" />
            <h5 className="projectDes">{description}</h5>
        </div>
    );
}

export default ProjectCard;