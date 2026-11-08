import "./Home.css";
import { Link } from "react-router-dom";

const interests = [
  {label: "Software Engineering", href: "/projects",},
  {label: "Full-Stack Development", href: "/skills",},
  {label: "Backend Development", href: "/projects",},
  {label: "Database Systems", href: "/about",},
];

function Home() {
  return (
    <main className="home-page">
      <div className="home-layout">
        <aside className="home-portrait">
          <figure className="portrait-frame">
            <img
              className="portrait-image"
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt="Portrait of me"
            />
            <figcaption>
              <span>RUTGERS UNIVERSITY</span>
              <span>COMPUTER SCIENCE · 2027</span>
            </figcaption>
          </figure>

          <p className="portrait-note">
            Based in New Jersey <span aria-hidden="true">↗</span>
          </p>
        </aside>

        <section className="home-intro">
          <p className="home-eyebrow">
            COMPUTER SCIENCE <span> / </span> SOFTWARE DEVELOPMENT
          </p>

          <h1>
            Hi, I'm <span className="name-accent">Hiloni Patel.</span>
          </h1>

          <h2 className="home-subtitle">
            Aspiring Software Engineer focused on Full-Stack Development and Backend Systems
          </h2>

          <section
            className="home-audio-section"
            aria-labelledby="home-audio-title"
          >
            <p className="section-label">A QUICK INTRODUCTION</p>

            <h3 id="home-audio-title">
              A little welcome.
            </h3>

            <p>
              Take a moment to listen to a short introduction to my portfolio and what you can explore throughout the website.
            </p>

            <audio
              className="home-audio-player"
              controls
              preload="metadata"
            >
              <source
                src={`${import.meta.env.BASE_URL}assets/home-intro.m4a`}
                type="audio/mp4"
              />
              Your browser does not support the audio player.
            </audio>

            <p className="home-audio-caption">
              A brief introduction recorded by me.
            </p>
          </section>

          <p className="home-lead">
            I’m a Computer Science student at Rutgers University,
            graduating in January 2027. I’m interested in software
            engineering roles where I can contribute to building
            reliable, scalable applications, particularly in
            full-stack and backend development. I enjoy turning
            ideas into functional applications and understanding
            the systems that make them work.
          </p>

          <p className="home-description">
            Through my projects, I’ve worked with REST APIs, relational
            databases, authentication, and application architecture.
            I’m continuing to strengthen my foundation in data
            structures, algorithms, and object-oriented programming
            while exploring how to build reliable, thoughtful software.
          </p>

          <p className="home-description">
            This portfolio is a collection of my technical
            experiences, projects, and growth as a computer
            science student. It highlights the skills I’ve
            developed through coursework and hands-on projects,
            from designing applications and working with
            databases to exploring software architecture.
            I invite you to explore my work, learn more about
            my background, and see how I’m continuing to grow
            as a software engineer.
          </p>

          <div className="home-divider" />

          <section className="interest-section" aria-labelledby="interest-heading">
            <p className="section-label" id="interest-heading">
              AREAS OF INTEREST
            </p>

            <ul className="interest-list">
              {interests.map((interest) => (
                <li key={interest.label}>
                  <Link to={interest.href}>
                    {interest.label}
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </li>
              ))}
            </ul>

          </section>

          <div className="home-divider" />

          <section className="home-goal" aria-labelledby="goal-heading">
            <p className="section-label" id="goal-heading">
              WHAT'S NEXT
            </p>
            <p>
              I’m seeking software engineering internship opportunities where I can contribute to real-world
              products, learn from experienced engineers, and grow through meaningful work. I’m especially
              interested in collaborative teams working on full-stack applications and backend systems.
            </p>
          </section>

          <div className="home-explore">
          <p className="section-label">EXPLORE MY PORTFOLIO</p>

          <div className="explore-links">
            <Link to="/skills">
              Skills & Resume <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/about">
              About & Coursework <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/projects">
              Projects <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/multimedia">
              Multimedia & Interests <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/reflection">
              Reflection <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/contact">
              Contact <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>

          <p className="home-signoff">
            Curious by nature. Building with purpose.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;