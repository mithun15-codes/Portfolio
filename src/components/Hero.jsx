import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
    const { personal, aboutMe } = portfolioData;

    return (
        <section id="about" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-status-pill">
                            <span className="status-indicator"></span>
                            <span>{personal.status || "Open to Software & Data Engineering Opportunities"}</span>
                        </div>

                        <p className="hero-greeting">Hi there, I'm</p>
                        <h1 className="hero-name">{personal.name}</h1>
                        <h2 className="hero-title">{personal.title}</h2>
                        <p className="hero-tagline">{personal.tagline}</p>

                        <div className="hero-about">
                            {aboutMe.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
                                <p key={index}>{paragraph.replace(/\n/g, ' ').trim()}</p>
                            ))}
                        </div>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                                Explore Projects
                            </a>
                            <a
                                href={personal.resumeLink}
                                download="Mithun_Mohan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="12" y1="18" x2="12" y2="12"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                </svg>
                                Download Resume
                            </a>
                            <a href="#contact" className="btn btn-ghost">
                                Contact Me
                            </a>
                        </div>

                        <div className="hero-social">
                            {personal.social.github && (
                                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            )}
                            {personal.social.linkedin && (
                                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            )}
                            {personal.social.website && (
                                <a href={personal.social.website} target="_blank" rel="noopener noreferrer" aria-label="Website" title="Website">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-outer-glow"></div>
                        <div className="hero-image-wrapper">
                            {personal.profileImage && (
                                <img
                                    src={personal.profileImage}
                                    alt={personal.name}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        if (e.target.nextElementSibling) {
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }
                                    }}
                                />
                            )}
                            <div className="hero-image-placeholder" style={{ display: personal.profileImage ? 'none' : 'flex' }}>
                                <span>{personal.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
