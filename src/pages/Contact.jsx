import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-container">
        <p className="contact-eyebrow">GET IN TOUCH</p>

        <h1 className="contact-title">
          Let's <span>connect.</span>
        </h1>

        <p className="contact-intro">
          Thank you for taking the time to explore my portfolio.
          I’m interested in connecting with others in software
          engineering, learning about new opportunities, and
          continuing to grow as a developer.
        </p>

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
        </div>
      </section>
    </main>
  );
}

export default Contact;