import React from 'react';
import './About.css';

const About = () => {
  const [showAnimation, setShowAnimation] = React.useState(false);
  const videoRef = React.useRef(null);

  const experiences = [
    {
      role: "Campus Ambassador",
      company: "Anthropic",
      period: "Dec 2025 - Present",
      details: [
        "Grew Claude's user base through social media campaigns and campus events.",
        "Organized workshops and hackathons to promote responsible AI usage among students.",
        "Collaborated with student organizations to integrate AI tools into their workflows."
      ]
    },
    {
      role: "AI & Robotics Researcher",
      company: "Texas Robotics",
      period: "Jan 2025 - Dec 2025",
      details: [
        "Wrote a paper on model failure diagnosis and fine-tuning under Dr. Junhong Xu.",
        "Researched hierarchical task planning for robotic manipulation under Dr. Ben Abbatematteo.",
        "Worked with VLMs, reinforcement learning, imitation learning, and the robot operating system."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      period: "May 2025 - Aug 2025",
      details: [
        "Built a Content Management System to improve data workflows for 100+ internal users.",
        "Built a video captioning pipeline to increase engagement on Vendor Central.",
        "Worked with microservices, CI/CD pipelines, TypeScript, Java, and tons of AWS tools."
      ]
    },
    {
      role: "Manager",
      company: "Mathnasium",
      period: "May 2023 - Nov 2023",
      details: [
        "Supervised, trained, and onboarded new instructors, while handling all business operations.",
        "Taught math to students and managed tailored learning plans.",
        "Learned a lot about teaching with empathy and how to communicate effectively."
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleHookemClick = () => {
    setShowAnimation(true);
  };

  const handleVideoEnd = () => {
    setShowAnimation(false);
  };

  return (
    <section id="about" className="about">
      {/* Hidden video for preloading */}
      <video src="/media/3rdDownAnimation.mp4" style={{ display: 'none' }} preload="auto" />

      {showAnimation && (
        <div className="animation-overlay">
          <video
            ref={videoRef}
            src="/media/3rdDownAnimation.mp4"
            autoPlay
            muted={false}
            onEnded={handleVideoEnd}
            className="fullscreen-video"
          />
          <div className="video-disclaimer">
            Property of University of Texas Football Creative Media Team
          </div>
        </div>
      )}
      <h2 className="section-title">A little about me.</h2>
      <div className="about-grid">
        <div className="about-left-column">
          <div className="about-intro">
            <p className="big-text">
              I'm currently studying Computer Science at UT Austin <span className="hookem" onClick={handleHookemClick}>🤘</span>
            </p>
          </div>

          <div className="outside-work">
            <h3 className="sub-heading">Outside of work...</h3>
            <p className="sub-text extra-info">
              I serve as a <strong>Product Manager</strong> for the <a href="https://txproduct.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Texas Product & Engineering Organization</a>,
              where I lead engineering and design teams to build software for non-profit organizations.
            </p>
            <p className="sub-text extra-info">
              I'm an <strong>Eagle Scout</strong>, the highest rank in the Boy Scouts of America.
              I led as a Senior Patrol Leader while completing service projects and earning the Gold Palm award.
              I love camping, rock-climbing, and everything outdoors.
            </p>
          </div>
        </div>

        <div className="about-experience">
          <h3 className="sub-heading">Work Experience</h3>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`exp-item ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleExperience(index)}
              >
                <div className="exp-header">
                  <span className="exp-tag">{exp.period}</span>
                  <div className="exp-toggle-icon">
                    {expandedIndex === index ? '−' : '+'}
                  </div>
                </div>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-company">{exp.company}</p>
                <div className="exp-details">
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
