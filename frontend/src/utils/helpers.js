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

// Icon initial positions - customize each icon's starting location
// Positions are in grid units (will be multiplied by gridSize)
export const ICON_POSITIONS = {
  'about': { x: 0, y: 0 },
  'skills': { x: 0, y: 1 },
  'openbackers': { x: 10, y: 3 },
  'vibeathon': { x: 10, y: 4 },
  'experience': { x: 0, y: 3 },
  'chatbot': { x: 0, y: 2 },
  'browser': { x: 7, y: 3 },
  'linkedin': { x: 0, y: 4 },
  'github': { x: 5, y: 4 },
};

export const initializeIconPositions = (apps, gridSize) => {
  const positions = {};
  apps.forEach((app) => {
    const gridPos = ICON_POSITIONS[app.id] || { x: 0, y: 0 };
    positions[app.id] = {
      x: gridPos.x * gridSize,
      y: gridPos.y * gridSize
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
