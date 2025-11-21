import React from 'react';
import './OpenBackersContent.css';

const OpenBackersContent = () => {
  return (
    <div className="iframe-content">
      <iframe
        src="https://openbackers.vercel.app/"
        title="OpenBackers"
        className="embedded-website"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default OpenBackersContent;
