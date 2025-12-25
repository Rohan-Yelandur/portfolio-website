import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Hey, I'm Rohan.</h1>

        <div className="hero-main">
          <div className="hero-image-wrapper">
            <div className="archer-mask">
              <img src="/images/headshot.png" alt="Rohan Yelandur" />
            </div>
          </div>

          <div className="hero-text">
            <h2 className="hero-intro">
              I'm a <span className="text-highlight">Software Engineer</span> based out of Texas
            </h2>
            <p className="hero-description">
              I'm interested in machine learning, robotics, quantitative development, and user experiences.
              Mostly, I love solving hard problems and building useful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;