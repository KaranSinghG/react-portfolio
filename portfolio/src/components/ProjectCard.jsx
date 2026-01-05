function ProjectCard({ title, description, technologies, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <p className="technologies">
                <b>Technologies:</b> {technologies.join(", ")}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}