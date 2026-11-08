import "./Projects.css";

const projects = [
  {
    id: "taskforge",
    number: "01",
    name: "TaskForge",
    subtitle: "SaaS Project Management Platform",
    projectType: "Independent Project",
    date: "2026",
    image: `${import.meta.env.BASE_URL}assets/taskforge.png`,
    summary:
      "A multi-tenant project management platform for organizing teams, projects, and task workflows while keeping each organization's data and permissions separate.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "JWT",
    ],
    highlights: [
      "Built 20 REST API route declarations across authentication, organization membership, projects, and tasks.",
      "Implemented JWT authentication and organization-scoped role-based access control for OWNER, ADMIN, MEMBER, and VIEWER roles.",
      "Designed five PostgreSQL tables with relational constraints and composite foreign keys to maintain organization-level data consistency.",
      "Developed task management features for status, priority, due dates, assignments, sorting, and updates.",
    ],
    challenge:
      "A key engineering consideration was keeping organization data consistent and making sure users could only perform actions permitted by their roles. I addressed this through relational constraints, backend authorization middleware, and permission-aware frontend controls.",
    learning:
      "This project strengthened my understanding of full-stack architecture and how authentication, authorization, database design, and frontend behavior need to work together.",
    visual: "taskforge-visual",
    visualLabel: "TaskForge organization management page",
    visualCaption: "The TaskForge organization page allows users to select an organization, view its members, and add or remove members based on their assigned roles. This screenshot highlights the platform's organization management and role-based access features.",
    repo: "https://github.com/hilonipatel/TaskForge.git",
  },
  {
    id: "retrace",
    number: "02",
    name: "RETRACE",
    subtitle: "Incident Replay & Debugging Platform",
    projectType: "Independent Project",
    date: "2026",
    image: `${import.meta.env.BASE_URL}assets/retrace.png`,
    summary:
      "A debugging platform that replays recorded HTTP requests, checks actual responses against expected behavior, and helps developers investigate failures and regressions.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Jest",
    ],
    highlights: [
      "Built 13 API route declarations and a relational data model covering incidents, ordered HTTP events, replay runs, and request-level results.",
      "Engineered sequential HTTP replay to capture responses and execution durations and report PASS/FAIL outcomes.",
      "Created a response diff viewer to compare expected and actual status codes and JSON bodies.",
      "Added replay history and run-to-run comparisons to track pass rates and identify regressions.",
      "Validated demo API behavior with five passing Jest tests.",
    ],
    challenge:
      "Replay results need to be useful at the individual request level, not just as one overall success or failure. I built the workflow to preserve request order, capture each response, and expose differences between expected and actual results.",
    learning:
      "RETRACE gave me hands-on experience with API behavior, automated testing, structured debugging, and turning backend execution results into information developers can act on.",
    visual: "RETRACE incident dashboard",
    visualCaption:
      "The RETRACE home page displays the total number of incidents, open and resolved incident counts, and an incident records queue. This view gives developers an overview of incident activity and provides a starting point for investigating recorded issues.",    
    repo: "https://github.com/hilonipatel/incident-replay-platform.git",
  },
  {
    id: "flightsystem",
    number: "03",
    name: "FlightSystem",
    subtitle: "Online Travel Reservation System",
    projectType: "Academic Project · 01:198:336",
    date: "Spring 2025",
    image: `${import.meta.env.BASE_URL}assets/flightsystem.png`,
    summary:
      "A web-based reservation system that supports flight search and booking alongside customer, representative, and administrator workflows.",
    technologies: [
      "Java",
      "Java Servlets",
      "Apache Tomcat",
      "JDBC",
      "MySQL",
      "HTML",
    ],
    highlights: [
      "Designed a 12-table relational schema for users, flights, airlines, airports, aircraft, reservations, waitlists, and customer Q&A.",
      "Implemented flight search and reservation features for one-way and round-trip itineraries, flexible dates, cancellations, and waitlists.",
      "Developed role-specific workflows for customers, customer representatives, and administrators.",
      "Built reports for monthly sales, revenue analysis, top customers, and frequently booked flights.",
    ],
    challenge:
      "The system needed to support several user roles and connect related information across flights, customers, and reservations. I worked with Java Servlets, JDBC, and a relational MySQL schema to organize those workflows and their underlying data.",
    learning:
      "This project helped me connect server-side Java programming with database operations and understand how a relational data model supports a larger, multi-role web application.",
    visual: "flightsystem-visual",
    visualLabel: "FlightSystem flight search and booking results",
    visualCaption:
      "FlightSystem allows customers to filter and sort flight options by minimum and maximum price, outbound and return airlines, and outbound and return takeoff and landing times. Customers can compare available round-trip flights and select an option to book their itinerary.",
    repo: "https://github.com/crrlyly/FlightSystem.git",
  },
];

function ProjectVisual({ src, label, caption }) {
  return (
    <figure className="project-visual">
      <img
        className="project-screenshot"
        src={src}
        alt={label}
        loading="lazy"
      />

      <figcaption className="visual-caption">
        {caption}
      </figcaption>
    </figure>
  );
}

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <p className="projects-eyebrow">SELECTED WORK</p>
          <h1>Projects built by <span>doing.</span></h1>
        </header>

        <section className="projects-list" aria-label="Programming projects">
          {projects.map((project) => (
            <article className="project-card" id={project.id} key={project.id}>
              <ProjectVisual
                src={project.image}
                label={project.visualLabel}
                caption={project.visualCaption}
              />

              <div className="project-details">
                <div className="project-number">
                  {project.number} / SELECTED PROJECT
                </div>

                <div className="project-meta">
                  <span className="project-type">{project.projectType}</span>
                  <span className="project-date">{project.date}</span>
                </div>

                <h2>{project.name}</h2>
                <h3>{project.subtitle}</h3>

                <p className="project-summary">{project.summary}</p>

                <div className="project-tech-section">
                  <p className="project-label">TECHNOLOGIES</p>
                  <ul className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-feature-section">
                  <p className="project-label">FEATURES & CONTRIBUTIONS</p>
                  <ul className="project-feature-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {project.repo ? (
                  <a
                    className="project-repo-link"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore the source code on GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="project-repo-pending">
                    GitHub repository link to be added
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Projects;