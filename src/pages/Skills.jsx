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


const projectHighlights = [
  {
    number: "01",
    title: "TaskForge",
    type: "Independent Project",
    date: "2026",
    description:
      "Applied full-stack development, database design, and authentication concepts to build a multi-tenant project management platform. Implemented organization-scoped permissions and relational constraints to support secure collaboration.",
    technologies:
      "React · TypeScript · Node.js · Express · PostgreSQL",
    github: "https://github.com/hilonipatel/TaskForge.git",
  },
  {
    number: "02",
    title: "RETRACE",
    type: "Independent Project",
    date: "2026",
    description:
      "Used backend development and API testing concepts to create an incident replay platform. Developed sequential HTTP replay, response comparisons, and replay history to help investigate failures and regressions.",
    technologies:
      "React · TypeScript · Node.js · Express · PostgreSQL · Jest",
    github:
      "https://github.com/hilonipatel/incident-replay-platform.git",
  },
  {
    number: "03",
    title: "FlightSystem",
    type: "Academic Project · 01:198:336",
    date: "Spring 2025",
    description:
      "Developed an online flight reservation system as part of Rutgers University's Principles of Information and Data Management course. Applied relational database design and Java web development concepts to implement flight search, reservations, and role-specific workflows.",
    technologies:
      "Java · Java Servlets · JDBC · MySQL · Apache Tomcat",
    github: "https://github.com/crrlyly/FlightSystem.git",
  },
];


function Skills() {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;
  const projectsUrl = `${import.meta.env.BASE_URL}projects`;

  return (
    <main className="skills-page">
      <section className="skills-intro">
        <p className="skills-eyebrow">SKILLS & RESUME</p>

        <h1 className="skills-title">
          What I bring <span>to the table.</span>
        </h1>
        
        <p className="skills-objective">
          I’m a Computer Science student at Rutgers University,
          graduating in January 2027, with a passion for technology
          and problem-solving. I’m interested in software engineering
          opportunities focused on full-stack development and backend
          systems, where I can apply my technical knowledge, build
          reliable applications, and continue learning through
          meaningful, collaborative work.
        </p>

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
            My technical foundation has developed through
            university coursework, independent projects, and
            hands-on experimentation. These skills allow me
            to work across different parts of an application,
            from designing its interface to implementing
            backend functionality and managing data.
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

      <section className="skills-projects">
        <div className="section-heading">
          <p className="skills-eyebrow">APPLICATION IN PRACTICE</p>

          <h2>Building beyond the classroom.</h2>

          <p>
            I enjoy applying what I learn to projects that address practical problems. Working through the development process has helped me connect
            programming concepts with application design, database structure, API development, and testing.
            Each project has provided an opportunity to strengthen my skills and approach problems from different perspectives.
          </p>
        </div>

        <div className="project-highlights">
          {projectHighlights.map((project) => (
            <article
              className="project-highlight"
              key={project.number}
            >
              <div className="project-highlight-heading">
                <span className="skill-number">
                  {project.number}
                </span>

                <div>
                  <h3>{project.title}</h3>

                  <p className="project-highlight-meta">
                    {project.type} <span>·</span> {project.date}
                  </p>
                </div>
              </div>

              <p>{project.description}</p>

              <p className="project-highlight-tech">
                {project.technologies}
              </p>

              <a
                className="project-highlight-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source on GitHub{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="project-navigation">
          <a
            className="all-projects-link"
            href="https://github.com/hilonipatel"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        className="skills-video-section"
        aria-labelledby="backend-video-title"
      >
        <div className="section-heading">
          <p className="skills-eyebrow">BACKEND DEVELOPMENT</p>

          <h2 id="backend-video-title">
            Understanding how web servers work.
          </h2>

          <p>
            This video explains how web servers process HTTP requests, serve static and dynamic content, and support web applications
            and APIs. It also demonstrates different server implementations, including Apache and Node.js.
          </p>
        </div>

        <div className="skills-video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/JhpUch6lWMw"
            title="How Web Servers Work: HTTP, Apache, and Node.js"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="skills-video-reflection">
          <p className="skills-eyebrow">WHY I CHOSE THIS VIDEO</p>

          <p>
            I chose this video because understanding how web servers communicate with clients is an important part of becoming
            a backend software engineer. Through projects such as FlightSystem, where I worked with Java Servlets, JDBC, and
            Apache Tomcat, I became interested in how requests are received, processed, and connected to application functionality.
            This video expands on those concepts by explaining HTTP communication and comparing different server implementations.
            It also connects to my interest in building reliable backend systems and developing a stronger understanding of how
            applications operate beyond the user interface.
          </p>
        </div>
      </section>

      <section className="skills-growth">
        <div className="section-heading">
          <p className="skills-eyebrow">CHALLENGES & GROWTH</p>

          <h2>Learning through problem-solving.</h2>
        </div>

        <p>
          Developing software has taught me that building a functional application involves more than writing code. Projects such as TaskForge challenged me to
          think carefully about database relationships, organization-level data isolation, and user permissions. RETRACE pushed me to consider how requests 
          should be replayed, how responses can be compared, and how test results can help identify unexpected behavior.
        </p>

        <p>
          Working through these problems has strengthened my approach to debugging and system design. I’ve learned to break complex requirements into
          smaller tasks, consider how different components interact, and use testing to validate functionality. I continue to build on these experiences as I 
          develop more reliable and maintainable software.
        </p>
      </section>

      <section className="skills-growth">
        <div className="section-heading">
          <p className="skills-eyebrow">CONTINUING TO LEARN</p>

          <h2>Growing as an engineer.</h2>
        </div>

        <p>
          I’m continuing to strengthen my foundation in software engineering through coursework and independent development. 
          I’m especially interested in expanding my understanding of software architecture, backend systems, testing, and deployment practices. 
          I’m also interested in exploring cloud technologies and how applications are deployed, maintained, and scaled in production environments.
        </p>

        <p>
          Outside of technical development, I value collaboration, curiosity, and continuous learning.
          I enjoy exploring new technologies, solving challenging problems, and developing projects that turn ideas into working applications.
        </p>
      </section>
    </main>
  );
}

export default Skills;
