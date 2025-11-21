// Utility functions for desktop operations

export const openExternalUrl = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const checkIconOverlap = (iconPositions, iconId, newPosition) => {
  return Object.entries(iconPositions).some(([id, pos]) => {
    if (id === iconId) return false;
    return pos.x === newPosition.x && pos.y === newPosition.y;
  });
};

export const initializeIconPositions = (apps, gridSize) => {
  const positions = {};
  apps.forEach((app, index) => {
    positions[app.id] = {
      x: 20,
      y: 20 + (index * gridSize)
    };
  });
  return positions;
};

export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
};

export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const formatShortDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric' 
  });
};
