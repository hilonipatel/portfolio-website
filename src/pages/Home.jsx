import "./Home.css";

const interests = [
  "Software Engineering",
  "Full-Stack Development",
  "Backend Development",
  "Database Systems",
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
            Computer Science student at Rutgers University
          </h2>

          <p className="home-lead">
            I’m graduating in January 2027, with a focus on software
            engineering, full-stack development, and backend systems.
            I enjoy turning ideas into functional applications and
            understanding the systems that make them work.
          </p>

          <p className="home-description">
            Through my projects, I’ve worked with REST APIs, relational
            databases, authentication, and application architecture.
            I’m continuing to strengthen my foundation in data
            structures, algorithms, and object-oriented programming
            while exploring how to build reliable, thoughtful software.
          </p>

          <div className="home-divider" />

          <section className="interest-section" aria-labelledby="interest-heading">
            <p className="section-label" id="interest-heading">
              AREAS OF INTEREST
            </p>

            <ul className="interest-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </section>

          <div className="home-divider" />

          <section className="home-goal" aria-labelledby="goal-heading">
            <p className="section-label" id="goal-heading">
              WHAT'S NEXT
            </p>
            <p>
              I’m seeking software engineering internship opportunities
              where I can contribute to real-world products, learn from
              experienced engineers, and grow through meaningful work.
            </p>
          </section>

          <p className="home-signoff">
            Curious by nature. Building with purpose.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
