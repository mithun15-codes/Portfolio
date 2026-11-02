import { portfolioData } from '../data/portfolioData';
import './Education.css';
import './Experience.css';

const Experience = () => {
    const { experience } = portfolioData;

    if (!experience || experience.length === 0) {
        return null;
    }

    return (
        <section id="experience" className="experience section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Career</span>
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">Hands-on industry experience in Python and backend development</p>
                </div>

                <div className="education-timeline">
                    {experience.map((job, index) => (
                        <div key={index} className="education-item">
                            <div className="education-marker">
                                <div className="marker-dot"></div>
                                {index !== experience.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="education-card card">
                                <div className="edu-header">
                                    <div>
                                        <h3>{job.role}</h3>
                                        <p className="edu-degree">{job.company}</p>
                                    </div>
                                    <span className="edu-duration">{job.duration}</span>
                                </div>

                                <div className="edu-details-row">
                                    <span className="edu-location">📍 {job.location}</span>
                                </div>

                                <ul className="experience-highlights">
                                    {job.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="coursework-tags">
                                    {job.techStack.map((tech, i) => (
                                        <span key={i} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

