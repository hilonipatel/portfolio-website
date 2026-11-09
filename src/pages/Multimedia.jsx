import { useState, useEffect } from "react";
import "./Multimedia.css";


const galleryImages = [
  {
    src: "assets/code.png",
    alt: "Code preview showing implementation details from a software project",
    caption: "Code & Implementation — A look at the code and project structure behind my software development work.",
  },
  {
    src: "assets/pagePreview.png",
    alt: "Android Studio XML layout preview showing items currently in the RU Cafe shopping cart",
    caption:  "RU Cafe — The XML layout used to display items in the user's shopping cart.",
  },
  {
    src: "assets/ruDonut.png",
    alt: "RU Cafe Android application main page preview in Android Studio",
    caption: "RU Cafe — The main interface of my Android application.",
  },
  {
    src: "assets/vehiclemgmt.png",
    alt: "Completed Vehicle Management System frontend designed with SceneBuilder",
    caption: "Vehicle Management System — The JavaFX frontend designed to manage vehicle information.",
  },
];

const base = import.meta.env.BASE_URL;
const asset = (path) => `${base}${path}`;

function Multimedia() {
  const [activeImage, setActiveImage] = useState(0);

  const drivePreviewUrl =
    "https://drive.google.com/file/d/1ayBfOXqO7ZXRySeljhCSd6nU0LVBEZJE/preview";

  const driveWatchUrl =
    "https://drive.google.com/file/d/1ayBfOXqO7ZXRySeljhCSd6nU0LVBEZJE/view";

  const currentImage = galleryImages[activeImage];

  function showPrevious() {
    setActiveImage(
      (activeImage - 1 + galleryImages.length) % galleryImages.length
    );
  }

  function showNext() {
    setActiveImage((activeImage + 1) % galleryImages.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="multimedia-page">
      <section className="multimedia-intro">
        <p className="multimedia-eyebrow">MULTIMEDIA & INTERESTS</p>

        <div className="multimedia-intro-grid">
          <h1 className="multimedia-title">
            More than just <span>code.</span>
          </h1>

        </div>
      </section>

      <section className="media-card video-card">
        <div className="video-frame">
          <iframe
            src={drivePreviewUrl}
            title="FlightSystem travel reservation system demonstration"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="media-copy">
          <p className="multimedia-eyebrow">01 / VIDEO DEMO</p>
          <h2>FlightSystem — Demo Walkthrough</h2>

          <p>

          <p>
            The screencast was created as part of the project's course requirements. It demonstrates FlightSystem from the perspectives
            of customers, customer representatives, and administrators. It walks through the customer experience, including creating
            an account, managing a profile, searching and booking flights, viewing past tickets, and submitting questions to customer representatives.
            <br /><br />
            The customer representative walkthrough shows how representatives manage users, book and edit tickets, respond to inquiries, and manage aircraft, airports, 
            and flights. It also demonstrates how representatives can view passenger waitlists and flight arrival and departure information for individual airports.
            <br /><br />
            The administrator walkthrough highlights account management and database functionality, including adding and removing customer representatives, 
            generating sales reports, viewing reservations by flight number, reviewing revenue summaries, and identifying the five most active flights. The demo also
            shows how application actions are reflected in the underlying SQL database.
            <br /><br />
            We created this screencast to provide a more complete visual explanation of the project than screenshots alone could offer.
            It demonstrates how the different user roles, application features, and database operations work together.
          </p>

          </p>

          <a
            className="media-link"
            href={driveWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on Google Drive <span aria-hidden="true">↗</span>
          </a>

          <p className="media-caption">
            Project Demonstration · FlightSystem
          </p>
        </div>
      </section>

      <section className="media-card gallery-card">
        <div className="media-copy gallery-copy">
          <p className="multimedia-eyebrow">02 / PHOTO GALLERY</p>
          <h2>Projects & Development</h2>

          <p>
          This gallery highlights different parts of my software development work, from code and application layouts to completed user
          interfaces. The images show how I move between implementation details and the user experience, including projects built with
          Java, JavaFX, and Android tools.
          </p>

          <p className="media-caption">
            Project interfaces, code, and development milestones
          </p>
        </div>

        <div className="gallery-viewer">
          <div className="gallery-image-wrap">
            <img
              key={currentImage.src}
              className="gallery-image"
              src={asset(currentImage.src)}
              alt={currentImage.alt}
            />
          </div>

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-arrow"
              onClick={showPrevious}
              aria-label="Show previous project image"
            >
              ←
            </button>

            <p className="gallery-caption" aria-live="polite">
              {currentImage.caption}
            </p>

            <button
              type="button"
              className="gallery-arrow"
              onClick={showNext}
              aria-label="Show next project image"
            >
              →
            </button>
          </div>

          <div className="gallery-dots" aria-label="Choose gallery image">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`gallery-dot ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}: ${image.caption}`}
                aria-pressed={activeImage === index}
              />
            ))}
          </div>
        </div>
      </section>
     
      <section className="media-card diagram-card">
        <div className="diagram-frame">
          <a
            className="diagram-image-link"
            href={asset("assets/diagram.png")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the full-size FlightSystem architecture diagram"
          >
            <img
              className="architecture-image"
              src={asset("assets/diagram.png")}
              alt="Full-page FlightSystem project diagram illustrating the application's design and system structure"
              loading="lazy"
            />
          </a>
        </div>

        <div className="media-copy">
          <p className="multimedia-eyebrow">03 / PROJECT DIAGRAM</p>
          <h2>FlightSystem — Project Overview</h2>

          <p>
            This diagram presents the overall structure of my
            FlightSystem project. It provides a visual reference
            for understanding how the application is organized
            and how its major components fit together.
          </p>

          <a
            className="media-link"
            href={asset("assets/diagram.png")}
            target="_blank"
            rel="noopener noreferrer"
          >
            View full-size diagram <span aria-hidden="true">↗</span>
          </a>

          <p className="media-caption">
            Project Diagram · FlightSystem
          </p>
        </div>
      </section>

      <section className="interests-section">
        <div className="interests-intro">
          <p className="multimedia-eyebrow"> 04 / OUTSIDE OF CODE </p>
          <h2>
            A little beyond <span>code.</span>
          </h2>
          <p className="interests-intro-text">
            Outside of technology, I enjoy reading, watching mystery and drama series, and staying connected
            to languages and culture. These interests give me a different way to explore stories, people, and perspectives.
          </p>
        </div>

        <div className="interests-grid">
          {/* Languages */}
          <article className="interest-card languages-card">
            <p className="interest-number">01</p>
            <h3>Languages I Speak</h3>
            <p className="interest-description">
              Languages that connect me to different people and experiences.
            </p>

            <div className="language-list">
              <div className="language-item">
                <span className="language-name">English</span>
                <span className="language-level">
                  Full professional
                </span>
              </div>

              <div className="language-item">
                <span className="language-name">Gujarati</span>
                <span className="language-level">
                  Native or bilingual
                </span>
              </div>

              <div className="language-item">
                <span className="language-name">Hindi</span>
                <span className="language-level">
                  Limited proficiency
                </span>
              </div>
            </div>
            <p className="interest-personal">
              Language is an important part of how I connect with people and my cultural background. Gujarati and Hindi
              help me stay connected to my culture, while English has been an important part of my education and
              everyday life. I appreciate how knowing multiple languages can create connections across different experiences and communities.
            </p>
          </article>

          {/* Books */}
          <article className="interest-card">
            <p className="interest-number">02</p>
            <h3>Books I Recommend</h3>
            <p className="interest-description">
              Stories that stayed with me for their themes, characters, and storytelling.
            </p>

            <ul className="recommendation-list">
              <li>
                <span className="recommendation-title">
                  The Kite Runner
                </span>
                <span className="recommendation-author">
                  Khaled Hosseini
                </span>
                <p className="recommendation-description">
                I first read this book as an assigned book in my English class, but its story stayed with me beyond
                the classroom. I enjoyed how it explored powerful themes of guilt, betrayal, and the possibility of
                redemption. It made me think about how past choices can shape a person's life and relationships.
              </p>
              </li>

              <li>
                <span className="recommendation-title">
                  All the Missing Pieces
                </span>
                <span className="recommendation-author">
                  Catherine Cowles
                </span>
                <p className="recommendation-description">
                  This small town romantic suspense novel stood out to me because of its high stakes mystery and
                  unexpected twists. I enjoyed how the suspense kept the story engaging while the romance added
                  another layer to the characters and their relationships.
                </p>
              </li>

              <li>
                <span className="recommendation-title">
                  Juniper Hill
                </span>
                <span className="recommendation-author">
                  Devney Perry
                </span>
                <p className="recommendation-description">
                  I enjoyed this small town romance for its family dynamics. The themes of healing and the main
                  female character's journey as she raises her newborn baby were particularly heartwarming.
                  I liked how the story balanced romance with personal growth and family connections.
                </p>
              </li>
            </ul>
          </article>

          {/* Series */}
          <article className="interest-card">
            <p className="interest-number">03</p>
            <h3>Series I Recommend</h3>
            <p className="interest-description">
            Mystery, emotional storytelling, and true-crime investigations that kept me interested.
            </p>

            <ul className="recommendation-list">
              <li>
                <span className="recommendation-title">
                  Last Seen
                </span>
                <span className="recommendation-author">
                  2026
                </span>
                <p className="recommendation-description">
                  I recently watched this series and really enjoyed the way the mystery was revealed early in the
                  story. Instead of focusing only on discovering what happened, the story explored the
                  psychological impact of the pursuit. That approach made it especially interesting to me.
                </p>
              </li>

              <li>
                <span className="recommendation-title">
                  Dear Edward
                </span>
                <span className="recommendation-author">
                  2023
                </span>
                <p className="recommendation-description">
                  This emotional series explores grief, resilience, and learning to move forward after loss. I found
                  myself relating to the main character and his struggle to accept what happened. I appreciated
                  how the story explored the different ways people cope with grief.
                </p>
              </li>

              <li>
                <span className="recommendation-title">
                  Manhunt: The Night Stalker
                </span>
                <span className="recommendation-author">
                  2021
                </span>
                <p className="recommendation-description">
                  I enjoyed this series because it is based on a true story and focuses on the investigation
                  behind catching the perpetrator. I found the investigative process compelling, especially
                  seeing how the case developed and how the people involved worked to bring it to a conclusion.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>

    </main>
  );
}

export default Multimedia;
