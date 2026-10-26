import "./Reflection.css";

function Reflection() {
  return (
    <main className="reflection-page">
      <section className="reflection-intro">
        <p className="reflection-eyebrow">
          REFLECTION & CONTACT
        </p>

        <h1 className="reflection-title">
          Looking back, <span> moving forward.</span>
        </h1>

        <div className="contact-links">
          <a
            className="contact-button contact-button-primary"
            href="https://github.com/hilonipatel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-button contact-button-secondary"
            href="https://www.linkedin.com/in/hiloni-patel"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-button contact-button-primary"
            href="mailto:hilonipatel22@gmail.com"
          >
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        className="reflection-content"
        aria-label="Personal reflection"
      >
        <div className="reflection-section">
          <h2>Learning through projects</h2>
          <p>
            One of the projects I learned the most from was my
            FlightSystem project. Since it was a semester-long
            group project, it helped me become familiar with
            different tools while improving my teamwork and
            communication skills. We had to work on different
            timelines while making sure that all parts of the
            project came together into one cohesive application.
            I also learned important technical fundamentals,
            such as creating SQL databases, which I have since
            applied to many of my other projects.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Overcoming challenges</h2>
          <p>
            One technical problem I struggled with during
            FlightSystem was accidentally pulling code from
            GitHub without first verifying that all my code
            had been pushed correctly. This resulted in most
            of my files being deleted. Fortunately, VS Code
            stores local history for individual files, which
            allowed me to restore my work. This experience
            taught me to be more cautious when verifying
            GitHub commits and helped me better understand
            how GitHub works. It also reminded me of the
            importance of keeping a local copy of my work
            on my device.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Connecting coursework and practice</h2>
          <p>
            One important concept I learned through my
            coursework came from CS 213: Software Methodology.
            The course taught me how to write clean, organized
            code by using functions to separate different
            parts of a program and writing meaningful comments
            that help others understand my code. These
            practices have helped me make my projects easier
            to read, understand, and maintain.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Growing my technical skills</h2>
          <p>
            The technical skill I have improved the most is
            database management. I believe database management
            is important because transforming raw data into
            structured information can support better
            decision-making, strengthen security, and save
            time. Through my coursework and projects, I have
            gained a better understanding of how databases
            can be designed and used effectively.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Looking ahead</h2>
          <p>
            Looking ahead, I want to pursue a career as a
            backend software engineer. I am particularly
            interested in server-side development, database
            management, and API development, as these are
            areas I genuinely enjoy and have gained experience
            in through my projects. I hope to continue building
            on these skills and apply what I have learned to
            develop reliable and effective software.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Reflection;
