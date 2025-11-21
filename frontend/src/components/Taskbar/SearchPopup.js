import React from 'react';
import './SearchPopup.css';

const SearchPopup = ({ searchQuery, onSearchChange, filteredApps, onSelectApp }) => {
  return (
    <div className="search-popup">
      <input
        type="text"
        className="search-input"
        placeholder="Search for apps..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        autoFocus
      />
      <div className="search-results">
        {filteredApps.length > 0 ? (
          filteredApps.map(app => (
            <div
              key={app.id}
              className="search-result-item"
              onClick={() => onSelectApp(app)}
            >
              <span className="search-result-icon">{app.icon}</span>
              <span className="search-result-title">{app.title}</span>
            </div>
          ))
        ) : (
          <div className="search-no-results">No apps found</div>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;
