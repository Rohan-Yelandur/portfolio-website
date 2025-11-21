import React, { useState, useEffect } from 'react';
import './Taskbar.css';
import Clock from './Clock';
import CalendarPopup from './CalendarPopup';
import SearchPopup from './SearchPopup';
import { useDesktop } from '../../context/DesktopContext';
import { APPS } from '../../utils/appsConfig';
import { openExternalUrl, formatTime, formatDate, formatShortDate } from '../../utils/helpers';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { windows, openWindow, minimizeWindow } = useDesktop();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!showCalendar && !showSearch) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest('.taskbar')) {
        setShowCalendar(false);
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar, showSearch]);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowSearch(false);
  };

  const handleSearchSelect = (app) => {
    app.url ? openExternalUrl(app.url) : openWindow(app.id, app.title);
    setShowSearch(false);
    setSearchQuery('');
  };

  const handleTaskbarItemClick = (appId) => {
    const window = windows[appId];
    if (window?.isOpen) {
      window.isMinimized ? openWindow(appId, window.title) : minimizeWindow(appId);
    }
  };

  const filteredApps = APPS.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openWindows = APPS.filter(app => !app.url && windows[app.id]?.isOpen);

  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <button className="taskbar-search-button" onClick={toggleSearch}>
          🔍
        </button>
        
        {showSearch && (
          <SearchPopup
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filteredApps={filteredApps}
            onSelectApp={handleSearchSelect}
          />
        )}

        <div className="taskbar-items">
          {openWindows.map(app => (
            <button
              key={app.id}
              className={`taskbar-item ${windows[app.id]?.isMinimized ? '' : 'taskbar-item-active'}`}
              onClick={() => handleTaskbarItemClick(app.id)}
              title={app.title}
            >
              <span className="taskbar-item-icon">{app.icon}</span>
              <span className="taskbar-item-title">{app.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="taskbar-right">
        <Clock 
          currentTime={currentTime}
          onClick={toggleCalendar}
          formatTime={formatTime}
          formatShortDate={formatShortDate}
        />

        {showCalendar && (
          <CalendarPopup
            currentTime={currentTime}
            formatDate={formatDate}
            formatTime={formatTime}
          />
        )}
      </div>
    </div>
  );
};

export default Taskbar;
