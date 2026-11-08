import { useState } from "react";
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
    challenge:
      "One of the biggest challenges in software development is managing complexity as an application grows. Understanding how classes interact, organizing responsibilities, and debugging unexpected behavior helped me become more deliberate in how I approach a problem. Breaking larger tasks into smaller components and using object-oriented design principles helped me build a stronger foundation for developing maintainable software.",
    tags: ["Java", "OOP", "UML", "Testing"],
  },
  {
    number: "01:198:336",
    name: "Principles of Information and Data Management",
    theme: "Understanding the data behind applications",
    description: "This course introduced me to how information is organized and queried, especially through relational databases, schema design, and SQL. Learning about topics such as transactions, reliability, security, and query optimization helped me understand why good data management matters just as much as the application itself. It also connected closely with my interest in backend development, where a well-designed database is an important part of building a reliable system.",
    challenge:
      "A major challenge in working with relational databases is designing a structure that supports application requirements while maintaining data consistency. Learning to think about relationships between tables, constraints, and SQL queries helped me approach database problems more systematically. I applied these concepts in FlightSystem, an academic project where I designed a relational database and developed reservation workflows. This experience helped me connect database theory with the practical needs of a working application.",
    tags: ["Databases", "SQL", "Schema Design", "Data Management"],
    project: {
      name: "FlightSystem",
      description:
        "An academic online travel reservation system developed for this course.",
      github: "https://github.com/crrlyly/FlightSystem.git",
    },
  },
  {
    number: "01:198:439",
    name: "Introduction to Data Science",
    theme: "Finding useful insights in data",
    description: "In this course, I explored different stages of working with data, from collecting and preparing it to visualizing information and using techniques such as machine learning and data mining. It helped me see how programming can be used to answer questions and uncover patterns, rather than only build traditional applications. The course also sparked my interest in how data-driven features and AI can be incorporated into useful software.",
    challenge:
      "Working with data involves more than applying a technique or producing a visualization. Understanding the data, preparing it appropriately, and interpreting results are all important parts of the process. This course encouraged me to think more carefully about how data can be transformed into meaningful information and helped me become more comfortable approaching problems analytically.",
    tags: ["Data Analysis", "Visualization", "Machine Learning"],
  },
  ];

const galleryImages = [
  {
    src: "assets/circuit.png",
    alt: "Circuit design of a simple processor",
    title: "Simple Processor — Circuit Design",
    caption:
      "This circuit represents a simple processor I designed to perform arithmetic and logical operations based on instructions stored in RAM. It highlights my experience with computer architecture and how hardware components work together to execute instructions.",
  },
  {
    src: "assets/junit.png",
    alt: "JUnit test cases in code with terminal output showing all tests passed",
    title: "JUnit Testing — Software Methodology",
    caption:
      "This image shows JUnit test cases alongside terminal output confirming that all tests passed. Testing helped me verify application behavior, identify issues, and understand the importance of writing reliable and maintainable software.",
  },
  {
    src: "assets/reservationList.png",
    alt: "Vehicle Management System reservation reporting feature",
    title: "Vehicle Management System — Reservation Reporting",
    caption:
      "This screenshot shows the reservation reporting feature of my Vehicle Management System. Users can print a list of reservations organized by location, license plate, or beginning date. This feature demonstrates how software can organize information into useful reports for users.",
  },
];

function About() {
  const [activeImage, setActiveImage] = useState(0);
  const base = import.meta.env.BASE_URL;
  const currentImage = galleryImages[activeImage];
  function showPrevious() {
    setActiveImage(
      (activeImage - 1 + galleryImages.length) % galleryImages.length
    );
  }
  function showNext() {
    setActiveImage((activeImage + 1) % galleryImages.length);
  }
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
              from programming fundamentals and mathematical
              foundations to software engineering, databases,
              data science, and artificial intelligence. Each stage
              has helped me build a stronger foundation for creating
              useful, reliable software.
            </p>
          </header>
  
          <section
            className="favorite-project-section"
            aria-labelledby="favorite-project-heading"
          >
            <header className="about-section-heading">
              <div>
                <p className="about-eyebrow">
                  A PROJECT THAT STANDS OUT
                </p>
  
                <h2 id="favorite-project-heading">
                  My favorite project.
                </h2>
              </div>
            </header>
  
            <article className="favorite-project">
              <div className="favorite-project-content">
                <p className="featured-course-number">
                  ACADEMIC PROJECT / 01:198:336
                </p>
  
                <h3>FlightSystem</h3>
  
                <p className="featured-course-theme">
                  Online Travel Reservation System
                </p>
  
                <p>
                  FlightSystem is one of my favorite projects because
                  it allowed me to apply concepts from my Principles
                  of Information and Data Management course to a
                  practical application. Developing a reservation
                  system helped me understand how database design,
                  backend logic, and user-facing functionality work
                  together.
                </p>
  
                <p>
                  I especially enjoyed working with relational
                  databases and developing features such as flight
                  search, reservations, cancellations, and
                  role-specific workflows. The project challenged
                  me to think about how different users interact
                  with a system and how the underlying data must
                  remain organized and consistent.
                </p>
  
                <p>
                  This experience strengthened my interest in
                  backend development and showed me how classroom
                  concepts can be used to build a functional
                  application.
                </p>
  
                <a
                  className="favorite-project-link"
                  href="https://github.com/crrlyly/FlightSystem.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore FlightSystem on GitHub
                  <span aria-hidden="true"> ↗</span>
                </a>
  
                <a
                  className="favorite-project-link"
                  href={`${import.meta.env.BASE_URL}projects`}
                >
                </a>
              </div>

              <div className="favorite-project-image">
                <img
                  src={`${import.meta.env.BASE_URL}assets/flightsystem-home.png`}
                  alt="FlightSystem customer home page with fields for departure location, arrival location, departure date, and boarding class"
                />

                <p className="image-caption">
                  The FlightSystem customer home page allows users to search for
                  flights by entering their departure and arrival locations,
                  departure date, and boarding class. This screenshot highlights
                  the customer-facing functionality I helped develop and the way
                  database information supports the flight-search experience.
                </p>
              </div>

            </article>
          </section>

          <section
            className="about-gallery-section"
            aria-labelledby="about-gallery-heading"
          >
            <header className="about-section-heading">
              <div>
                <p className="about-eyebrow">
                  COURSEWORK & DEVELOPMENT
                </p>

                <h2 id="about-gallery-heading">
                  Learning through building.
                </h2>
              </div>

              <p className="about-gallery-intro">
                A few examples of the technical work and applications I explored throughout my computer science coursework.
                Each image highlights a different area of learning, from computer architecture and software testing to application development.
              </p>
            </header>

            <div className="about-gallery">
              <div className="about-gallery-image-wrap">
                <img
                  key={currentImage.src}
                  className="about-gallery-image"
                  src={`${base}${currentImage.src}`}
                  alt={currentImage.alt}
                  loading="lazy"
                />
              </div>

              <div className="about-gallery-content">
                <p className="about-eyebrow">
                  IMAGE {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </p>

                <h3>{currentImage.title}</h3>

                <p className="about-gallery-caption">
                  {currentImage.caption}
                </p>
              </div>

              <div className="about-gallery-controls">
                <button
                  type="button"
                  className="about-gallery-arrow"
                  onClick={showPrevious}
                  aria-label="Show previous image"
                >
                  ←
                </button>

                <div
                  className="about-gallery-dots"
                  aria-label="Choose gallery image"
                >
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      className={`about-gallery-dot ${
                        activeImage === index ? "active" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show image ${index + 1}: ${image.title}`}
                      aria-pressed={activeImage === index}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="about-gallery-arrow"
                  onClick={showNext}
                  aria-label="Show next image"
                >
                  →
                </button>
              </div>
            </div>
          </section>
  
          <section
            className="featured-courses-section"
            aria-labelledby="featured-heading"
          >
            <header className="about-section-heading featured-heading">
              <div>
                <p className="about-eyebrow">
                  COURSEWORK HIGHLIGHTS
                </p>
  
                <h2 id="featured-heading">
                  Courses that shaped my interests.
                </h2>
              </div>
  
              <p className="featured-heading-note">
                Three areas that connect classroom learning
                to the software I want to build.
              </p>
            </header>
  
            <div className="featured-course-list">
              {featuredCourses.map((course, index) => (
                <article
                  className="featured-course"
                  key={course.number}
                >
                  <div className="featured-course-index">
                    0{index + 1}
                  </div>
  
                  <div className="featured-course-content">
                    <p className="featured-course-number">
                      {course.number}
                    </p>
  
                    <h3>{course.name}</h3>
  
                    <p className="featured-course-theme">
                      {course.theme}
                    </p>
  
                    <p className="featured-course-description">
                      {course.description}
                    </p>
  
                    <div className="course-reflection">
                      <p className="reflection-label">
                        CHALLENGES & WHAT I LEARNED
                      </p>
  
                      <p className="featured-course-challenge">
                        {course.challenge}
                      </p>
                    </div>
  
                    {course.project && (
                      <div className="course-project-link">
                        <p className="reflection-label">
                          RELATED ACADEMIC PROJECT
                        </p>
  
                        <h4>{course.project.name}</h4>
  
                        <p>{course.project.description}</p>
  
                        <a
                          href={course.project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View FlightSystem on GitHub
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      </div>
                    )}
  
                    <ul
                      className="course-tags"
                      aria-label="Course topics"
                    >
                      {course.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
  
          <section
            className="timeline-section"
            aria-labelledby="timeline-heading"
          >
            <div className="about-section-heading">
              <div>
                <p className="about-eyebrow">2023 — 2027</p>
  
                <h2 id="timeline-heading">
                  Academic timeline.
                </h2>
              </div>
  
              <p className="timeline-key">
                <span className="timeline-key-dot" />
                Current semester
              </p>
            </div>
  
            <div className="academic-timeline">
              {semesters.map((semester, index) => (
                <article
                  className={`timeline-item${
                    semester.current ? " is-current" : ""
                  }`}
                  key={semester.term}
                >
                  <div
                    className="timeline-marker"
                    aria-hidden="true"
                  >
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
                          <span className="course-code">
                            {code}
                          </span>
  
                          <span className="course-name">
                            {title}
                          </span>
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
                <div
                  className="graduation-marker"
                  aria-hidden="true"
                >
                  ✳
                </div>
  
                <div className="graduation-content">
                  <p className="about-eyebrow">
                    JANUARY 2027
                  </p>
  
                  <h3>Graduation</h3>
                </div>
              </article>
            </div>
          </section>
  
          <footer className="about-footer">
            <p className="about-eyebrow">LOOKING AHEAD</p>
  
            <h2>Building on the fundamentals.</h2>
  
            <p className="about-intro">
              As I approach graduation, I’m looking forward to
              applying what I’ve learned to new challenges,
              continuing to grow as a software engineer, and
              building software that makes a meaningful impact.
            </p>
          </footer>
  
      </div>
    </main>
  );
}


export default About;