import './css/projects.css';

function ProjectCard({ title, description, technologies, link }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <p className="tech">
                <b>Technologies:</b> {technologies.join(", ")}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default ProjectCard;