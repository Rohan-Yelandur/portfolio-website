import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ARMusical from "./Pages/Projects/ARMusical";
import AIMathTutor from "./Pages/Projects/AIMathTutor";

import ZipReader from "./Pages/Projects/ZipReader";
import './App.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.3; // moderate volume
          await audioRef.current.play();
          // If successful, we don't need listeners
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        }
      } catch (err) {
        console.log("Audio autoplay failed, waiting for user interaction");
      }
    };

    const handleInteraction = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          // Only remove listeners once playback ACTUALLY starts
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        } catch (e) {
          console.error("Play failed retry on next click", e);
        }
      }
    };

    // Try immediately on mount
    playAudio();

    // Add listeners for fallback
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <audio ref={audioRef} src="/media/Sudo.mp3" loop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/ar-musical" element={<ARMusical />} />
          <Route path="/projects/ai-math-tutor" element={<AIMathTutor />} />

          <Route path="/projects/zip-reader" element={<ZipReader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;