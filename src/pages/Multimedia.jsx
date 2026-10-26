
import { useState } from "react";
import "./Multimedia.css";


const galleryImages = [
  {
    src: "assets/code.png",
    alt: "Code preview showing implementation details from a software project",
    caption: "Code preview — implementation and project structure",
  },
  {
    src: "assets/pagePreview.png",
    alt: "Android Studio XML layout preview showing items currently in the RU Cafe shopping cart",
    caption: "RU Cafe — XML cart layout preview in Android Studio",
  },
  {
    src: "assets/ruDonut.png",
    alt: "RU Cafe Android application main page preview in Android Studio",
    caption: "RU Cafe — Android application main page",
  },
  {
    src: "assets/vehiclemgmt.png",
    alt: "Completed Vehicle Management System frontend designed with SceneBuilder",
    caption: "Vehicle Management System — JavaFX frontend",
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
            This walkthrough demonstrates my FlightSystem travel
            reservation application, including its flight search
            and reservation workflows. It offers a visual overview
            of the application built with Java Servlets, JDBC,
            and MySQL.
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
            A collection of application screenshots and development
            visuals from my projects. Explore the interfaces I built,
            the code behind them, and different parts of the
            development process.
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
          <p className="multimedia-eyebrow">
            04 / OUTSIDE OF CODE
          </p>
          <h2>
            A little beyond <span>code.</span>
          </h2>
        </div>

        <div className="interests-grid">
          {/* Languages */}
          <article className="interest-card languages-card">
            <p className="interest-number">01</p>
            <h3>Languages I Speak</h3>
            <p className="interest-description">
              Languages that connect me to different people.
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
          </article>

          {/* Books */}
          <article className="interest-card">
            <p className="interest-number">02</p>
            <h3>Books I Recommend</h3>
            <p className="interest-description">
              Stories worth adding to your reading list.
            </p>

            <ul className="recommendation-list">
              <li>
                <span className="recommendation-title">
                  The Kite Runner
                </span>
                <span className="recommendation-author">
                  Khaled Hosseini
                </span>
              </li>

              <li>
                <span className="recommendation-title">
                  All the Missing Pieces
                </span>
                <span className="recommendation-author">
                  Catherine Cowles
                </span>
              </li>

              <li>
                <span className="recommendation-title">
                  Juniper Hill
                </span>
                <span className="recommendation-author">
                  Devney Perry
                </span>
              </li>
            </ul>
          </article>

          {/* Series */}
          <article className="interest-card">
            <p className="interest-number">03</p>
            <h3>Series I Recommend</h3>
            <p className="interest-description">
              Series to add to your watchlist.
            </p>

            <ul className="recommendation-list">
              <li>
                <span className="recommendation-title">
                  Last Seen
                </span>
                <span className="recommendation-author">
                  2026
                </span>
              </li>

              <li>
                <span className="recommendation-title">
                  Dear Edward
                </span>
                <span className="recommendation-author">
                  2023
                </span>
              </li>

              <li>
                <span className="recommendation-title">
                  Manhunt: The Night Stalker
                </span>
                <span className="recommendation-author">
                  2026
                </span>
              </li>
            </ul>
          </article>
        </div>
      </section>

    </main>
  );
}

export default Multimedia;
