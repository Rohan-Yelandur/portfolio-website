import React, { useState, useRef, useCallback } from 'react';
import './Icon.css';

const Icon = ({ app, onDoubleClick, position, onDragEnd, gridSize = 96 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState(position);
  const iconRef = useRef(null);
  const dragStartTime = useRef(0);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    setCurrentPos({ x: newX, y: newY });
  }, [isDragging, dragStart.x, dragStart.y]);

  const handleMouseUp = useCallback((e) => {
    if (!isDragging) return;

    const dragDuration = Date.now() - dragStartTime.current;
    
    // If drag was very short (< 200ms), treat it as a potential click, not a drag
    if (dragDuration < 200) {
      setIsDragging(false);
      setCurrentPos(position);
      return;
    }

    // Snap to grid
    const snappedX = Math.round(currentPos.x / gridSize) * gridSize;
    const snappedY = Math.round(currentPos.y / gridSize) * gridSize;

    // Call onDragEnd with snapped position
    const success = onDragEnd(app.id, { x: snappedX, y: snappedY });
    
    if (!success) {
      // Drag was cancelled (overlap detected), revert to original position
      setCurrentPos(position);
    }

    setIsDragging(false);
  }, [isDragging, currentPos.x, currentPos.y, gridSize, onDragEnd, app.id, position]);

  const handleMouseDown = (e) => {
    // Only start drag on left mouse button
    if (e.button !== 0) return;
    
    dragStartTime.current = Date.now();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Update current position when prop position changes
  React.useEffect(() => {
    if (!isDragging) {
      setCurrentPos(position);
    }
  }, [position, isDragging]);

  const handleDoubleClick = () => {
    if (!isDragging) {
      onDoubleClick(app);
    }
  };

  return (
    <div 
      ref={iconRef}
      className={`desktop-icon ${isDragging ? 'dragging' : ''}`}
      style={{
        position: 'absolute',
        left: `${currentPos.x}px`,
        top: `${currentPos.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      <div className="icon-image">
        {app.icon}
      </div>
      <div className="icon-label">
        {app.title}
      </div>
    </div>
  );
};

export default Icon;
