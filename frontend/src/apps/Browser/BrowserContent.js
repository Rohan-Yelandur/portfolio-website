import React from 'react';
import './BrowserContent.css';

const BrowserContent = () => {
  return (
    <div className="iframe-content">
      <iframe
        src="https://www.google.com/webhp?igu=1"
        title="Browser"
        className="embedded-website"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default BrowserContent;
