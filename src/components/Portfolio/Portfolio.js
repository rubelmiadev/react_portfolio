import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>MY Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img2" />
          </div>

          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="img1" />
          </div>

          <h3> This is a portfolio item title</h3>

          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="img3" />
          </div>

          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img4" />
          </div>

          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels "
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="img5" />
          </div>

          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img4" />
          </div>

          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels "
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
