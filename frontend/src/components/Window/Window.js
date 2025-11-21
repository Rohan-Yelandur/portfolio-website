import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Window.css';
import { useDesktop } from '../../context/DesktopContext';
import { 
  MIN_WINDOW_WIDTH, 
  MIN_WINDOW_HEIGHT, 
  MIN_VISIBLE_WIDTH, 
  MIN_VISIBLE_HEIGHT,
  TASKBAR_HEIGHT 
} from '../../utils/constants';

const Window = ({ appId, title, children, onClose, onFocus, onMinimize, onMaximize, position, size, zIndex, isMinimized, isMaximized }) => {
  const windowRef = useRef(null);
  const { updateWindowPosition, updateWindowSize } = useDesktop();
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      const minVisibleWidth = Math.min(MIN_VISIBLE_WIDTH, size.width);
      
      const constrainedX = Math.max(
        -size.width + minVisibleWidth,
        Math.min(newX, window.innerWidth - minVisibleWidth)
      );
      const constrainedY = Math.max(
        0,
        Math.min(newY, window.innerHeight - MIN_VISIBLE_HEIGHT - TASKBAR_HEIGHT)
      );
      
      updateWindowPosition(appId, { x: constrainedX, y: constrainedY });
    }
    
    if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      const newWidth = Math.max(MIN_WINDOW_WIDTH, resizeStart.width + deltaX);
      const newHeight = Math.max(MIN_WINDOW_HEIGHT, resizeStart.height + deltaY);
      
      updateWindowSize(appId, { width: newWidth, height: newHeight });
    }
  }, [isDragging, isResizing, dragOffset, resizeStart, appId, updateWindowPosition, updateWindowSize, size.width]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  // Dragging logic
  const handleMouseDownTitle = (e) => {
    if (e.target.classList.contains('window-button')) return;
    if (isMaximized) return; // Don't allow dragging when maximized
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onFocus();
  };

  // Resizing logic
  const handleMouseDownResize = (e) => {
    if (isMaximized) return; // Don't allow resizing when maximized
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    });
    onFocus();
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isMaximized ? 'window-maximized' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: zIndex
      }}
      onMouseDown={onFocus}
    >
      <div 
        className="window-titlebar"
        onMouseDown={handleMouseDownTitle}
      >
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <button className="window-button minimize" onClick={onMinimize}>−</button>
          <button className="window-button maximize" onClick={onMaximize}>
            {isMaximized ? '❐' : '□'}
          </button>
          <button className="window-button close" onClick={onClose}>×</button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
      {!isMaximized && (
        <div 
          className="window-resize-handle"
          onMouseDown={handleMouseDownResize}
        />
      )}
    </div>
  );
};

export default Window;
