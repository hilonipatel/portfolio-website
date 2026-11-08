import "./Reflection.css";

function Reflection() {
  return (
    <main className="reflection-page">
      <section className="reflection-intro">
        <p className="reflection-eyebrow">
          REFLECTION
        </p>

        <h1 className="reflection-title">
          Looking back, <span> moving forward.</span>
        </h1>
      </section>

      <section
        className="reflection-content"
        aria-label="Personal reflection"
      >
        <div className="reflection-section">
          <h2>Learning through projects</h2>
          <p>
            One of the projects I learned the most from was my FlightSystem project. Since it was a semester-long
            group project, it helped me become familiar with different tools while improving my teamwork and
            communication skills. We had to coordinate our work and timelines while making sure that all parts of the
            project came together into one cohesive application. I also learned important technical fundamentals,
            such as designing SQL databases and connecting application functionality to stored data. Developing
            flight search, reservations, and role-specific workflows helped me understand how different parts
            of a web application depend on one another. This experience encouraged me to continue building
            projects that combine database design with backend development.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Overcoming challenges</h2>
          <p>
            One technical problem I struggled with during FlightSystem was accidentally pulling code from
            GitHub without first verifying that all my code had been pushed correctly. This resulted in most
            of my files being deleted. Fortunately, VS Code stores local history for individual files, which
            allowed me to restore my work. This experience taught me to be more cautious when verifying
            GitHub commits and understanding the changes being pulled into my local project. It also
            reminded me of the importance of keeping backups of my work. In addition to maintaining a local
            copy, I now recognize the value of using a cloud-based backup to protect against losing
            important files. Going forward, I want to develop more consistent habits for version control and project backups.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Connecting coursework and practice</h2>
          <p>
            One important concept I learned through my coursework came from CS 213: Software Methodology.
            The course taught me how to write clean, organized code by using functions to separate different
            parts of a program and writing meaningful comments that help others understand my code. These practices have helped me make my projects easier
            to read, understand, and maintain. I plan to continue applying these principles as I work on larger and more complex software projects.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Growing my technical skills</h2>
          <p>
            The technical skill I have improved the most is database management. I believe database management
            is important because transforming raw data into structured information can support better
            decision-making, strengthen security, and save time. Through my coursework and projects, I have
            gained a better understanding of how databases can be designed and used effectively. Beyond
            databases, I am interested in improving my understanding of backend architecture, cloud
            deployment, and software testing. I want to learn how to design applications that are not only
            functional, but also reliable, scalable, and maintainable.
          </p>
        </div>

        <div className="reflection-section">
          <h2>Looking ahead</h2>
          <p>
            Looking ahead, I want to pursue a career as a backend software engineer. I am particularly
            interested in server-side development, database management, and API development, as these are
            areas I genuinely enjoy and have gained experience in through my projects. I also hope to deepen my
            understanding of backend architecture, cloud deployment, and software testing. As I approach
            graduation, I look forward to applying these skills to real-world engineering challenges and
            continuing to grow as a developer.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Reflection;
