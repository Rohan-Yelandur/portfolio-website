import React from 'react';
import './VibeathonContent.css';

const VibeathonContent = () => {
  return (
    <div className="iframe-content">
      <iframe
        src="https://tvg-vibeathon.vercel.app/"
        title="Vibeathon"
        className="embedded-website"
        frameBorder="0"
        allow="camera; microphone; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VibeathonContent;
