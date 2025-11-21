import React from 'react';
import './CalendarPopup.css';

const CalendarPopup = ({ currentTime, formatDate, formatTime }) => {
  const monthYear = currentTime.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="calendar-popup">
      <div className="calendar-header">
        <div className="calendar-month">{monthYear}</div>
        <div className="calendar-full-date">{formatDate(currentTime)}</div>
      </div>
      <div className="calendar-time-large">{formatTime(currentTime)}</div>
    </div>
  );
};

export default CalendarPopup;
