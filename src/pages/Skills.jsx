
import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "SQL",
      "OCaml",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      "React",
      "React Router",
      "Node.js",
      "Express.js",
      "Java Servlets",
      "JDBC",
      "Android",
      "REST APIs",
      "Apache Tomcat",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Relational Database Design",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Android Studio",
      "MySQL Workbench",
      "Scene Builder",
    ],
  },
  {
    title: "Libraries",
    skills: ["pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "API Design",
      "CRUD Operations",
      "Layered Architecture",
      "Service/Repository Pattern",
      "Request Validation",
      "Error Handling",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
];

function Skills() {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;

  return (
    <main className="skills-page">
      <section className="skills-intro">
        <p className="skills-eyebrow">SKILLS & RESUME</p>

        <h1 className="skills-title">
          What I bring <span>to the table.</span>
        </h1>

        <div className="resume-actions">
          <a
            className="resume-button resume-button-primary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <p className="skills-eyebrow">TECHNICAL TOOLKIT</p>
          <h2>Skills & technologies</h2>
          <p>
            Languages, frameworks, tools, and concepts I have
            worked with through coursework and projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;
