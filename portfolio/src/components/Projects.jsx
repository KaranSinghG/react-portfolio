import ProjectCard from "./ProjectCard";
import './css/index.css';

function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <div className="projects-grid">
                <ProjectCard
                    title="AEBAS"
                    description="Aadhaar Enabled Biometric Attendance System"
                    technologies={["Python", "Raspberry Pi", "Fingerprint module"]}
                    link="https://github.com/yourusername/AEBAS"
                />
                <ProjectCard
                    title="Chatbot using Dialogflow"
                    description="Simple React app with Dialogflow integration"
                    technologies={["React", "Dialogflow"]}
                    link="https://github.com/yourusername/chatbot-dialogflow"
                />
            </div>
        </>
    );
}

export default Projects;