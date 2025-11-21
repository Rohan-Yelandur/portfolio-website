import React, { useState } from 'react';
import './Desktop.css';
import Icon from '../Icon/Icon';
import Window from '../Window/Window';
import Taskbar from '../Taskbar/Taskbar';
import { useDesktop } from '../../context/DesktopContext';
import { APPS } from '../../utils/appsConfig';
import { GRID_SIZE } from '../../utils/constants';
import { openExternalUrl, checkIconOverlap, initializeIconPositions } from '../../utils/helpers';

const Desktop = () => {
  const { windows, openWindow, closeWindow, focusWindow, minimizeWindow, maximizeWindow } = useDesktop();
  const [iconPositions, setIconPositions] = useState(() => initializeIconPositions(APPS, GRID_SIZE));

  const handleIconDoubleClick = (app) => {
    app.url ? openExternalUrl(app.url) : openWindow(app.id, app.title);
  };

  const handleIconDragEnd = (iconId, newPosition) => {
    if (checkIconOverlap(iconPositions, iconId, newPosition)) return false;
    
    setIconPositions(prev => ({ ...prev, [iconId]: newPosition }));
    return true;
  };

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {APPS.map(app => (
          <Icon 
            key={app.id}
            app={app}
            position={iconPositions[app.id]}
            gridSize={GRID_SIZE}
            onDoubleClick={handleIconDoubleClick}
            onDragEnd={handleIconDragEnd}
          />
        ))}
      </div>
      
      <div className="desktop-windows">
        {APPS.map(app => {
          const windowState = windows[app.id];
          if (app.url || !windowState?.isOpen) return null;
          
          const AppComponent = app.component;
          
          return (
            <Window
              key={app.id}
              appId={app.id}
              title={windowState.title}
              position={windowState.position}
              size={windowState.size}
              zIndex={windowState.z}
              isMinimized={windowState.isMinimized}
              isMaximized={windowState.isMaximized}
              externalUrl={app.externalUrl}
              onClose={() => closeWindow(app.id)}
              onFocus={() => focusWindow(app.id)}
              onMinimize={() => minimizeWindow(app.id)}
              onMaximize={() => maximizeWindow(app.id)}
            >
              <AppComponent />
            </Window>
          );
        })}
      </div>
      
      <Taskbar />
    </div>
  );
};

export default Desktop;
