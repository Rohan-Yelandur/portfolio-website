import React from 'react';
import './Clock.css';

const Clock = ({ currentTime, onClick, formatTime, formatShortDate }) => {
  return (
    <button className="taskbar-clock" onClick={onClick}>
      <div className="clock-time">{formatTime(currentTime)}</div>
      <div className="clock-date">{formatShortDate(currentTime)}</div>
    </button>
  );
};

export default Clock;
