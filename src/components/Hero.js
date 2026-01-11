import { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const images = [
    "/media/headshot.png",
    "/media/coffee.jpg",
    "/media/connect.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Hey, I'm Rohan.</h1>

        <div className="hero-main">
          <div className="hero-image-wrapper">
            <div className="carousel-container">
              <button className="carousel-arrow left" onClick={prevImage}>❮</button>
              <div className="archer-mask">
                <img src={images[currentImageIndex]} alt="Rohan Yelandur" className="fade-in" key={currentImageIndex} />
              </div>
              <button className="carousel-arrow right" onClick={nextImage}>❯</button>
            </div>
          </div>

          <div className="hero-text">
            <h2 className="hero-intro">
              I'm a <span className="text-highlight">Software Engineer</span> based in Texas
            </h2>
            <p className="hero-description">
              I machine learning, robotics, trading, and UX.
              I've won national hackathons and competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;