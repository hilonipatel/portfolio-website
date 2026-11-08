import "./Contact.css";

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd2YwVc2w0O7ddlCgV6aN0JLMORpTa24cvQOZdr76T26ZjnLg/viewform?usp=dialog";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-container">
        <p className="contact-eyebrow">GET IN TOUCH</p>

        <h1 className="contact-title">
          Let's <span>connect.</span>
        </h1>

        <p className="contact-intro">
          Thank you for taking the time to explore my portfolio. I’m interested in connecting with others in software
          engineering, learning about new opportunities, and continuing to grow as a developer.
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

      <section
        className="contact-feedback-section"
        aria-labelledby="feedback-title"
      >
        <div className="feedback-heading">
          <p className="contact-eyebrow">PORTFOLIO FEEDBACK</p>

          <h2 id="feedback-title" className="feedback-title">
            I'd love to hear <span>from you.</span>
          </h2>

          <p className="feedback-description">
            Have thoughts about my projects, a question, or an opportunity to share? Use the form below to leave a
            message. Your feedback helps me continue improving my portfolio and growing as a developer.
          </p>
        </div>

        <div className="google-form-container">
          <iframe
            title="Portfolio feedback and contact form"
            src={googleFormUrl}
            className="google-form"
            loading="lazy"
          >
            Loading feedback form...
          </iframe>
        </div>

        <p className="feedback-note">
          Prefer to connect directly? You can also reach me through GitHub or LinkedIn above.
        </p>
      </section>
    </main>
  );
}

export default Contact;