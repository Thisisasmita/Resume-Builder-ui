import { useState } from "react";
import "./App.css";

function App() {
  const [personal, setPersonal] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: ""
  });

  const [education, setEducation] = useState([{ degree: "", school: "", year: "" }]);
  const [experience, setExperience] = useState([{ role: "", company: "", duration: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "" }]);
  const [internships, setInternships] = useState([{ title: "", company: "", duration: "" }]);
  const [certificates, setCertificates] = useState([{ name: "", issuer: "" }]);
  const [achievements, setAchievements] = useState([""]);
  const [skills, setSkills] = useState([""]);

  // Common add/delete handlers
  const handleAdd = (setState, template) => {
    setState((prev) => [...prev, template]);
  };

  const handleDelete = (setState, index) => {
    setState((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="resume-builder">
      {/* Left Section – Input Fields */}
      <div className="form-section">
        <h1>🧾 Resume Builder</h1>

        {/* PERSONAL DETAILS */}
        <h2>👤 Personal Details</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={personal.name}
          onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="✉️ Email"
          value={personal.email}
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="📞 Phone"
          value={personal.phone}
          onChange={(e) => setPersonal({ ...personal, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="📍 Address"
          value={personal.address}
          onChange={(e) => setPersonal({ ...personal, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="🔗 LinkedIn"
          value={personal.linkedin}
          onChange={(e) => setPersonal({ ...personal, linkedin: e.target.value })}
        />

        {/* EDUCATION */}
        <h2>🎓 Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => {
                const list = [...education];
                list[index].degree = e.target.value;
                setEducation(list);
              }}
            />
            <input
              type="text"
              placeholder="School / College"
              value={edu.school}
              onChange={(e) => {
                const list = [...education];
                list[index].school = e.target.value;
                setEducation(list);
              }}
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => {
                const list = [...education];
                list[index].year = e.target.value;
                setEducation(list);
              }}
            />
            <button onClick={() => handleDelete(setEducation, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setEducation, { degree: "", school: "", year: "" })}>
          ➕ Add Education
        </button>

        {/* EXPERIENCE */}
        <h2>💼 Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => {
                const list = [...experience];
                list[index].role = e.target.value;
                setExperience(list);
              }}
            />
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => {
                const list = [...experience];
                list[index].company = e.target.value;
                setExperience(list);
              }}
            />
            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => {
                const list = [...experience];
                list[index].duration = e.target.value;
                setExperience(list);
              }}
            />
            <button onClick={() => handleDelete(setExperience, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setExperience, { role: "", company: "", duration: "" })}>
          ➕ Add Experience
        </button>

        {/* PROJECTS */}
        <h2>🧩 Projects</h2>
        {projects.map((pro, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Project Title"
              value={pro.title}
              onChange={(e) => {
                const list = [...projects];
                list[index].title = e.target.value;
                setProjects(list);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={pro.description}
              onChange={(e) => {
                const list = [...projects];
                list[index].description = e.target.value;
                setProjects(list);
              }}
            />
            <button onClick={() => handleDelete(setProjects, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setProjects, { title: "", description: "" })}>
          ➕ Add Project
        </button>

        {/* INTERNSHIPS */}
        <h2>🧑‍💻 Internships</h2>
        {internships.map((intern, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Title"
              value={intern.title}
              onChange={(e) => {
                const list = [...internships];
                list[index].title = e.target.value;
                setInternships(list);
              }}
            />
            <input
              type="text"
              placeholder="Company"
              value={intern.company}
              onChange={(e) => {
                const list = [...internships];
                list[index].company = e.target.value;
                setInternships(list);
              }}
            />
            <input
              type="text"
              placeholder="Duration"
              value={intern.duration}
              onChange={(e) => {
                const list = [...internships];
                list[index].duration = e.target.value;
                setInternships(list);
              }}
            />
            <button onClick={() => handleDelete(setInternships, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setInternships, { title: "", company: "", duration: "" })}>
          ➕ Add Internship
        </button>

        {/* CERTIFICATES */}
        <h2>📜 Certificates</h2>
        {certificates.map((cert, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Certificate Name"
              value={cert.name}
              onChange={(e) => {
                const list = [...certificates];
                list[index].name = e.target.value;
                setCertificates(list);
              }}
            />
            <input
              type="text"
              placeholder="Issuer"
              value={cert.issuer}
              onChange={(e) => {
                const list = [...certificates];
                list[index].issuer = e.target.value;
                setCertificates(list);
              }}
            />
            <button onClick={() => handleDelete(setCertificates, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setCertificates, { name: "", issuer: "" })}>
          ➕ Add Certificate
        </button>

        {/* ACHIEVEMENTS */}
        <h2>🏆 Achievements</h2>
        {achievements.map((ach, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Achievement"
              value={ach}
              onChange={(e) => {
                const list = [...achievements];
                list[index] = e.target.value;
                setAchievements(list);
              }}
            />
            <button onClick={() => handleDelete(setAchievements, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setAchievements, "")}>➕ Add Achievement</button>

        {/* SKILLS */}
        <h2>🧠 Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="section">
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => {
                const list = [...skills];
                list[index] = e.target.value;
                setSkills(list);
              }}
            />
            <button onClick={() => handleDelete(setSkills, index)}>❌</button>
          </div>
        ))}
        <button onClick={() => handleAdd(setSkills, "")}>➕ Add Skill</button>
      </div>

      {/* Right Section – Preview */}
      <div className="preview-section">
        <h1>{personal.name || "Your Name"}</h1>
        <p>✉️ {personal.email}</p>
        <p>📞 {personal.phone}</p>
        <p>📍 {personal.address}</p>
        <p>🔗 {personal.linkedin}</p>

        <h2>🎓 Education</h2>
        <ul>{education.map((e, i) => <li key={i}>{e.degree} - {e.school} ({e.year})</li>)}</ul>

        <h2>💼 Experience</h2>
        <ul>{experience.map((e, i) => <li key={i}>{e.role} - {e.company} ({e.duration})</li>)}</ul>

        <h2>🧩 Projects</h2>
        <ul>{projects.map((p, i) => <li key={i}>{p.title} - {p.description}</li>)}</ul>

        <h2>🧑‍💻 Internships</h2>
        <ul>{internships.map((iVal, i) => <li key={i}>{iVal.title} - {iVal.company} ({iVal.duration})</li>)}</ul>

        <h2>📜 Certificates</h2>
        <ul>{certificates.map((c, i) => <li key={i}>{c.name} - {c.issuer}</li>)}</ul>

        <h2>🏆 Achievements</h2>
        <ul>{achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>

        <h2>🧠 Skills</h2>
        <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
    </div>
  );
}

export default App;