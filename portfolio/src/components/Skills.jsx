import './css/skills.css';
function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-group">
                    <h3>Backend Development</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>REST APIs</li>
                        <li>JPA / Hibernate</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Database</h3>
                    <ul>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;