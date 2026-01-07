import './css/header.css';

function Header() {
    return (
        <header>
            <div className="header-content">
                <h1>Karan Singh</h1>
                <p className="subtitle">Software Engineer | Java • Spring Boot • React</p>
                <br />
                <div className="social-links">
                    <a href="https://github.com/"
                        target="_blank"
                        className="btn-outline"> GitHub </a>
                    <a href="https://linkedin.com/"
                        target="_blank"
                        className="btn-outline">LinkedIn </a>
                </div>
            </div>
        </header>
    );
}

export default Header;