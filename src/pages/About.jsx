import "./About.css";

const semesters = [
  {
    term: "Fall 2023",
    courses: [
      ["01:198:111", "Introduction to Computer Science"],
      ["01:640:151", "Calculus I for the Mathematical and Physical Sciences"],
      ["04:189:103", "Information Technology and Informatics"],
    ],
  },
  {
    term: "Spring 2024",
    courses: [
      ["01:198:112", "Data Structures"],
      ["01:640:152", "Calculus II for the Mathematical and Physical Sciences"],
    ],
  },
  {
    term: "Summer 2024",
    courses: [
      ["01:198:205", "Introduction to Discrete Structures I"],
      ["01:640:250", "Introductory Linear Algebra"],
    ],
  },
  {
    term: "Fall 2024",
    courses: [
      ["01:198:206", "Introduction to Discrete Structures II"],
      ["01:198:211", "Computer Architecture"],
    ],
  },
  {
    term: "Spring 2025",
    courses: [
      ["01:198:214", "Systems Programming"],
      ["01:198:336", "Principles of Information and Data Management"],
      ["01:198:344", "Design and Analysis of Computer Algorithms"],
    ],
  },
  {
    term: "Fall 2025",
    courses: [
      ["01:198:213", "Software Methodology"],
      ["01:198:314", "Principles of Programming Languages"],
      ["01:198:352", "Internet Technology"],
    ],
  },
  {
    term: "Spring 2026",
    courses: [
      ["01:198:439", "Introduction to Data Science"],
    ],
  },
  {
    term: "Fall 2026",
    current: true,
    courses: [
      ["01:198:323", "Numerical Analysis and Computing"],
      ["01:198:440", "Introduction to Artificial Intelligence"],
      ["05:300:350", "Education & Computers"],
    ],
  },
];

const featuredCourses = [
  {
    number: "01:198:213",
    name: "Software Methodology",
    theme: "Building software that works well and is maintainable",
    description: "This course helped me see what goes into building a larger software application beyond writing code. Working with Java, object-oriented design, UML, testing, debugging, and version control gave me a better understanding of how to organize a project and keep it maintainable as it grows. I also learned about GUI development and event-driven programming, which made me more interested in how the different parts of an application come together.",
    tags: ["Java", "OOP", "UML", "Testing"],
  },
  {
    number: "01:198:336",
    name: "Principles of Information and Data Management",
    theme: "Understanding the data behind applications",
    description: "This course introduced me to how information is organized and queried, especially through relational databases, schema design, and SQL. Learning about topics such as transactions, reliability, security, and query optimization helped me understand why good data management matters just as much as the application itself. It also connected closely with my interest in backend development, where a well-designed database is an important part of building a reliable system.",
    tags: ["Databases", "SQL", "Schema Design", "Data Management"],
  },
  {
    number: "01:198:439",
    name: "Introduction to Data Science",
    theme: "Finding useful insights in data",
    description: "In this course, I explored different stages of working with data, from collecting and preparing it to visualizing information and using techniques such as machine learning and data mining. It helped me see how programming can be used to answer questions and uncover patterns, rather than only build traditional applications. The course also sparked my interest in how data-driven features and AI can be incorporated into useful software.",
    tags: ["Data Analysis", "Visualization", "Machine Learning"],
  },
  ];

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <header className="about-header">
          <p className="about-eyebrow">MY ACADEMIC JOURNEY</p>
          <h1 className="about-title">
          Learning, <span>semester by semester.</span>
          </h1>
          <p className="about-intro">
            I’m a Computer Science student at Rutgers University,
            graduating in January 2027. My coursework has taken me
            from programming fundamentals and mathematical foundations
            to software engineering, databases, data science, and
            artificial intelligence. Each stage has helped me build a
            stronger foundation for creating useful, reliable software.
          </p>
        </header>

        <section className="featured-courses-section" aria-labelledby="featured-heading">
          <header className="about-section-heading featured-heading">
            <div>
              <p className="about-eyebrow">COURSEWORK HIGHLIGHTS</p>
              <h2 id="featured-heading">Courses that shaped my interests</h2>
            </div>
            <p className="featured-heading-note">
              Three areas that connect classroom learning to the
              software I want to build.
            </p>
          </header>

          <div className="featured-course-list">
            {featuredCourses.map((course, index) => (
              <article className="featured-course" key={course.number}>
                <div className="featured-course-index">
                  0{index + 1}
                </div>

                <div className="featured-course-content">
                  <p className="featured-course-number">{course.number}</p>
                  <h3>{course.name}</h3>
                  <p className="featured-course-theme">{course.theme}</p>
                  <p className="featured-course-description">
                    {course.description}
                  </p>

                  <ul className="course-tags" aria-label="Course topics">
                    {course.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline-section" aria-labelledby="timeline-heading">
          <div className="about-section-heading">
            <div>
              <p className="about-eyebrow">2023 — 2027</p>
              <h2 id="timeline-heading">Academic timeline</h2>
            </div>
            <p className="timeline-key">
              <span className="timeline-key-dot" />
              Current semester
            </p>
          </div>

          <div className="academic-timeline">
            {semesters.map((semester, index) => (
              <article
                className={`timeline-item${semester.current ? " is-current" : ""}`}
                key={semester.term}
              >
                <div className="timeline-marker" aria-hidden="true">
                  {semester.current ? <span /> : null}
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h3>{semester.term}</h3>
                    {semester.current && (
                      <span className="current-label">
                        IN PROGRESS
                      </span>
                    )}
                  </div>

                  <ul className="course-list">
                    {semester.courses.map(([code, title]) => (
                      <li key={code}>
                        <span className="course-code">{code}</span>
                        <span className="course-name">{title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index === semesters.length - 1 && (
                  <span className="timeline-end-note">
                    Final listed semester
                  </span>
                )}
              </article>
            ))}

            <article className="graduation-item">
              <div className="graduation-marker" aria-hidden="true">✳</div>
              <div className="graduation-content">
                <p className="about-eyebrow">JANUARY 2027</p>
                <h3>Graduation</h3>
              </div>
            </article>
          </div>
        </section>

        <footer className="about-footer">
          <p className="about-eyebrow">LOOKING AHEAD</p>
          <h2>Building on the fundamentals.</h2>
        </footer>
      </div>
    </main>
  );
}

export default About;
