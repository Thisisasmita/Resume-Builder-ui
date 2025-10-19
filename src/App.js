import { useState } from "react";
import "./App.css";

function App() {
  // All the form states
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [internship, setInternship] = useState("");
  const [certifications, setCertifications] = useState("");
  const [achievements, setAchievements] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h2>Dynamic Resume Builder</h2>
      </header>

      {/* Main Section */}
      <div className="main-section">
        {/* Left Form */}
        <div className="form-section">
          <h3>Personal Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title (e.g. Frontend Developer)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Short Professional Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <h3>Education</h3>
          <input
            type="text"
            placeholder="e.g. B.Tech in CSE, XYZ University"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />

          <h3>Experience</h3>
          <textarea
            placeholder="e.g. Frontend Intern at ABC Corp (June–Aug 2025)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <h3>Projects</h3>
          <textarea
            placeholder="e.g. Portfolio Website using React — a personal project."
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />

          <h3>Internships</h3>
          <textarea
            placeholder="e.g. Java Intern at Zidio Development (Aug–Oct 2025)"
            value={internship}
            onChange={(e) => setInternship(e.target.value)}
          />

          <h3>Certifications</h3>
          <textarea
            placeholder="e.g. React Development – Coursera | May 2025"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
          />

          <h3>Achievements</h3>
          <textarea
            placeholder="e.g. Winner – Smart India Hackathon 2025"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          />

          <h3>Skills</h3>
          <input
            type="text"
            placeholder="e.g. React, JavaScript, HTML, CSS"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <h3>Contact</h3>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="LinkedIn or Portfolio URL"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </div>

        {/* Right Preview */}
        <div className="preview-section">
          <div className="resume-card">
            <h2>{name || "Your Name"}</h2>
            <h4 className="job-title">{title || "Your Job Title"}</h4>
            <p className="summary">{summary || "Write a short summary about yourself."}</p>

            <h3>Education</h3>
            <p>{education || "Add your education details here."}</p>

            <h3>Experience</h3>
            <p>{experience || "Add your experience or internships."}</p>

            <h3>Projects</h3>
            <p>{projects || "List your main projects or portfolio work."}</p>

            <h3>Internships</h3>
            <p>{internship || "Mention internships or training experience."}</p>

            <h3>Certifications</h3>
            <p>{certifications || "Add any courses or certificates earned."}</p>

            <h3>Achievements</h3>
            <p>{achievements || "Mention your awards or hackathon wins."}</p>

            <h3>Skills</h3>
            <p>{skills || "List your top skills here."}</p>

            <h3>Contact</h3>
            <p>Email: {email || "your.email@example.com"}</p>
            <p>Portfolio: {portfolio || "www.linkedin.com/in/yourname"}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Built by A — Frontend Developer | Trial Task</p>
      </footer>
    </div>
  );
}

export default App;