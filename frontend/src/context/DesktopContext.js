import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { 
  DEFAULT_WINDOW_WIDTH, 
  DEFAULT_WINDOW_HEIGHT, 
  WINDOW_OFFSET_STEP,
  TASKBAR_HEIGHT 
} from '../utils/constants';

const DesktopContext = createContext();

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error('useDesktop must be used within a DesktopProvider');
  }
  return context;
};

export const DesktopProvider = ({ children }) => {
  const [windows, setWindows] = useState({});
  const [highestZ, setHighestZ] = useState(1);

  const openWindow = useCallback((appId, appTitle) => {
    setWindows(prev => {
      if (prev[appId]?.isOpen) {
        const newZ = highestZ + 1;
        setHighestZ(newZ);
        return {
          ...prev,
          [appId]: { ...prev[appId], z: newZ, isMinimized: false }
        };
      }
      
      const newZ = highestZ + 1;
      setHighestZ(newZ);
      const offset = Object.keys(prev).length * WINDOW_OFFSET_STEP;
      
      return {
        ...prev,
        [appId]: {
          id: appId,
          title: appTitle,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
          z: newZ,
          position: { x: 100 + offset, y: 100 + offset },
          size: { width: DEFAULT_WINDOW_WIDTH, height: DEFAULT_WINDOW_HEIGHT },
          previousPosition: null,
          previousSize: null
        }
      };
    });
  }, [highestZ]);

  const closeWindow = useCallback((appId) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isOpen: false }
    }));
  }, []);

  const minimizeWindow = useCallback((appId) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isMinimized: true }
    }));
  }, []);

  const maximizeWindow = useCallback((appId) => {
    setWindows(prev => {
      const window = prev[appId];
      if (window.isMaximized) {
        return {
          ...prev,
          [appId]: {
            ...window,
            isMaximized: false,
            position: window.previousPosition || window.position,
            size: window.previousSize || window.size
          }
        };
      } else {
        const viewportWidth = global.innerWidth || 1920;
        const viewportHeight = global.innerHeight || 1080;
        return {
          ...prev,
          [appId]: {
            ...window,
            isMaximized: true,
            previousPosition: window.position,
            previousSize: window.size,
            position: { x: 0, y: 0 },
            size: { width: viewportWidth, height: viewportHeight - TASKBAR_HEIGHT }
          }
        };
      }
    });
  }, []);

  const focusWindow = useCallback((appId) => {
    setWindows(prev => {
      const currentZ = prev[appId]?.z || 0;
      if (currentZ === highestZ) return prev;
      
      const newZ = highestZ + 1;
      setHighestZ(newZ);
      
      return {
        ...prev,
        [appId]: { ...prev[appId], z: newZ }
      };
    });
  }, [highestZ]);

  const updateWindowPosition = useCallback((appId, position) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], position }
    }));
  }, []);

  const updateWindowSize = useCallback((appId, size) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], size }
    }));
  }, []);

  // Handle viewport resize - update maximized windows
  useEffect(() => {
    const handleResize = () => {
      setWindows(prev => {
        const updated = { ...prev };
        let hasChanges = false;

        Object.keys(updated).forEach(appId => {
          const window = updated[appId];
          if (window.isMaximized && window.isOpen) {
            const viewportWidth = global.innerWidth || 1920;
            const viewportHeight = global.innerHeight || 1080;
            updated[appId] = {
              ...window,
              position: { x: 0, y: 0 },
              size: { width: viewportWidth, height: viewportHeight - TASKBAR_HEIGHT }
            };
            hasChanges = true;
          }
        });

        return hasChanges ? updated : prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize
  };

  return (
    <DesktopContext.Provider value={value}>
      {children}
    </DesktopContext.Provider>
  );
};
